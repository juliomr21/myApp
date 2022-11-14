import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../Services/http-service.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataStoreService } from '../../data-store.service';
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
      cpf: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
      senha: ['',[Validators.required]]
    });

  }


  ngOnInit(): void {
    localStorage.setItem('access-token', '');
    localStorage.setItem('id-token','');
  }
  login() {
    const Body = this.formPass.value;
    const Url = environment.UrlBase + "auth/login";
    if(this.validateLogin()){
      this.http.post(Url, Body).subscribe({
        next:
          res => {
            let resLog: any = res;
            let temp:any;
            localStorage.setItem('access-token', resLog.token.toString());
            localStorage.setItem('id-token', resLog.id_usuario.toString());
            this.http.userInfo().subscribe(res => {temp = res; this.dataS.setUser(temp.data.nome);});
            this.router.navigate(['']);
  
          },
        error: () => {
          this.sesion_fail = true;
          this.erro_message = "CPF ou senha errados!"
  
        }
  
      });

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

}


