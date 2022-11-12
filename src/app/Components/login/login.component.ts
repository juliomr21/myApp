import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../../Services/http-service.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formPass: FormGroup;
  sesion_fail = false;
  constructor(private http: HttpServiceService, private fb: FormBuilder, private cookie: CookieService, private router: Router) {
    this.formPass = this.fb.group({
     cpf: [''],
     senha: ['']
    });
   
  }


  ngOnInit(): void {
   localStorage.setItem('access-token','');
  }
  login() {
    const Body = this.formPass.value;
    const Url = environment.UrlBase + "auth/login";
    this.http.post(Url, Body).subscribe({
      next:
        res => {
          var x:any = res;
          console.log(x);
          localStorage.setItem('access-token',x.token.toString()); 
          localStorage.setItem('id-token',x.id_usuario.toString());
          this.router.navigate(['formulario']);
          this.http.setUser(this.formPass.value.cpf);
        
        },
        error:()=>{
          this.sesion_fail = true;
         
        }

    }

    );
  }
  newLogin(){
 
   this.http.gett().subscribe(res => console.log(res));
  }
  
}
interface user_log {
  email: string,
  password: string
}
interface mi_user {
  cpf: string,
  senha: string
}

