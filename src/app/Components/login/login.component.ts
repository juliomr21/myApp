import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../Services/http-service.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataStoreService } from '../../data-store.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formPass: FormGroup;
  sesion_fail = false;
  senha_fail = '';
  cpf_fail = '';
  erro_message = '';
  constructor(
    private http: HttpServiceService,
    private fb: FormBuilder,
    private dataS: DataStoreService,
    private router: Router) {
    this.formPass = this.fb.group({
      cpf: ['96766110007',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
      senha: ['usuario',[Validators.required]]
    });

  }


  ngOnInit(): void {
   
  }
  
  async login(){
    const Body = this.formPass.value;
    const Url = environment.UrlBase + "auth/login";
    if(this.validateLogin())
    {
      try{
        const response:any = await firstValueFrom(this.http.post(Url,Body)) ;
        localStorage.setItem('access-token', response.token.toString());
        localStorage.setItem('id-token', response.id_usuario.toString());
        let id = localStorage.getItem('id-token')!
        let Urlg = environment.UrlBase + `user/usuarios/${id}`;
   
        const res:any = await firstValueFrom(this.http.getH(Urlg));
        localStorage.setItem('nome',res.data.nome);
        this.dataS.setUser(res.data.nome);
        this.router.navigate(['vista']);
       
      }
      catch(reason){
        this.sesion_fail = true;
        console.log("CPF ou senha errados!")
        this.erro_message = "CPF ou senha errados!"
      }
    }
    
  }
  validateLogin(){
    const controls = this.formPass.controls;
    this.cpf_fail = ''
    this.senha_fail = ''
    let validate = true;
  if(controls["cpf"].invalid)
  {
    this.cpf_fail = 'is-invalid'
    validate = false;
  }
  
  if(controls["senha"].invalid){
     this.senha_fail = 'is-invalid'
     validate = false;
  }
  return validate;
 }
  newLogin() {
    this.router.navigate(['register']);
  }
  rsenha() {
    this.router.navigate(['rsenha']);
  }

}


