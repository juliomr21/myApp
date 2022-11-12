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
      email: [''],
      password: ['']
    });
   
    //cookie.delete('token');
  }


  ngOnInit(): void {
   localStorage.setItem('access-token','');
  }
  login() {
    const Body = this.formPass.value;
    const Url = environment.UrlBase + "login";
    this.http.post(Url, Body).subscribe({
      next:
        res => {
         // console.log(res);
         // this.cookie.set('token', res.toString(), 0.005, '/');
          localStorage.setItem('access-token',res.toString()); 
          this.router.navigate(['formulario']);
        //  console.log('saliendo del login');
        },
        error:()=>{
          this.sesion_fail = true;
         // console.error('tenemos un problmas usuario o contraseña mal',err.error);
        }

    }

    );
  }
  newLogin(){
   var Body:mi_user = {cpf:"06335968762",senha:"moreno123"};
   this.http.post("http://localhost/api_livre_20/public/auth/login",Body).subscribe(res=>{console.log(res)});

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

