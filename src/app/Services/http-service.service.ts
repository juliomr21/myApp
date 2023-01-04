import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private user: string;
  private user$: Subject<string>;
  private userData: any;
  private userData$: Subject<any>;
  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {
    this.user = '';
    this.user$ = new Subject<string>();
    this.userData = {};
    this.userData$ = new Subject<any>();
  }
  setUserData(userTemp: any) {
    //console.log(userTemp)
    this.userData = userTemp;
    this.userData$.next(this.userData);
  }
  setUser(usuario: string) {
    this.user = usuario;
    this.user$.next(this.user);
  }
  getUserData$(): Observable<any> {
    return this.userData$.asObservable();
  }
  getUserData() {
    return this.userData;
  }
  getUser$(): Observable<string> {
    return this.user$.asObservable();
  }
  getUser() {
    return this.user;
  }
  getH(Url: string) {
    const token: string = localStorage.getItem('access-token')!;
    let headers = new HttpHeaders({
      // "Content-Type": "application/json",
      "Authorization": token
    });
    return this.http.get(Url, { headers });
  }
  postH(Url: string, data: any) {
    const token: string = localStorage.getItem('access-token')!;
    let headers = new HttpHeaders({
      // "Content-Type": "application/json",
      "Authorization": token
    });
    return this.http.post(Url, data, { headers });
  }
  post(Url: string, data: any) {
    return this.http.post(Url, data);
  }

  get(Url: string) {
    return this.http.get(Url);
  }

  actualizar_endereco(data: any, id: any) {
    const token: string = localStorage.getItem('access-token')!;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token
    });
    let Url = environment.UrlBase + `user/dados-usuario/${id}`
    return this.http.put(Url, data, { headers });
  }
  actualizar_dados_pesoais(data: any, id: any) {
    const token: string = localStorage.getItem('access-token')!;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token
    });
    let Url = environment.UrlBase + `user/usuarios/${id}`

    return this.http.put(Url, data, { headers });
  }
  eliminar_beneficiario(id:any){
    let Url = environment.UrlBase + `user/beneficiario/${id}`
    let data = { "eliminado": "1"};
    const token: string = localStorage.getItem('access-token')!;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token
    });
    return this.http.put(Url, data, { headers });
  }

}


