import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(
    private http: HttpServiceService,
    private fb: FormBuilder,
    private dataS: DataStoreService,
    private router: Router) {
    this.formPass = this.fb.group({
      cpf: [''],
      senha: ['']
    });

  }


  ngOnInit(): void {
    localStorage.setItem('access-token', '');
  }
  login() {
    const Body = this.formPass.value;
    const Url = environment.UrlBase + "auth/login";
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

      }

    });
  }
  newLogin() {
    this.router.navigate(['register']);
   // this.http.userInfo().subscribe(res => console.log(res));
  }

}


