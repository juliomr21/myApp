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
    console.log(userTemp)
    this.userData = userTemp;
    this.userData$.next(this.userData);
  }
  setUser(usuario: string) {
    this.user = usuario;
    //this.personas.push(pPersona);
    this.user$.next(this.user);
    // this.personas$.next(this.personas);
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
 getBeneficiario(){
  const token: string = localStorage.getItem('access-token')!;
  
  let headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": token
  });

  
  return this.http.get('http://localhost/api_livre_20/public/user/beneficiario',{headers});
 }

  post(Url: string, data: any) {
    return this.http.post(Url, data);
  }
  uploadImage(data:any):Observable<any>{
    const Url = environment.UrlBase+"user/upload-image/0";
    let token = localStorage.getItem('access-token')!;
   // let id = localStorage.getItem('id-token')!
   // let Url = environment.UrlBase + `user/usuarios/${id}`;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token
    });
    // var MiFormData = new FormData();
    // MiFormData.append('image', data);
    return this.http.post(Url,data,{headers});

  }
  subirImagen(arquivo:FormData):Observable<any>{
    let token = localStorage.getItem('access-token')!;
    
     let headers = new HttpHeaders({
     
     // "Content-Type": "application/x-www-form-urlencoded",
       "Authorization": token
     });
    
    let Url = environment.UrlBase + `user/upload-image/0`;
    return this.http.post(Url,arquivo,{headers});
  }
  subirImagen1(arquivo:FormData):Observable<any>{
    let token = localStorage.getItem('access-token')!;
    
     let headers = new HttpHeaders({
     
      "Content-Type": "application/json",
       "Authorization": token
     });
    
    let Url = environment.UrlBase + `user/upload-image/0`;
    return this.http.post(Url,arquivo,{headers});
  }

  upload(arquivo:File){
    var form = new FormData(); 
    form.append('arquivo',arquivo);
    console.log('archivo enviado al servidor con   "Content-Type": "application/x-www-form-urlencoded"',form);
    let token = localStorage.getItem('access-token')!;
    
    let headers = new HttpHeaders({
    
    // "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": token
    });
   
   let Url = environment.UrlBase + `user/upload-image/0`;
   return this.http.post(Url,form,{headers});
  }

  userInfo() {
    let token = localStorage.getItem('access-token')!;
    let id = localStorage.getItem('id-token')!
    let Url = environment.UrlBase + `user/usuarios/${id}`;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token
    });
    return this.http.get(Url, { headers });

  }
  dados_pessoais() {
    let token = localStorage.getItem('access-token')!;
    let id = localStorage.getItem('id-token')!
   // let Url = environment.UrlBase + `user/dados-usuario/`;
   let Url = `http://localhost/api_livre_20/public/user/dados-usuario`
   let headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": token
  });
    return this.http.get(Url, { headers });

  }
  get(Url: string) {
    return this.http.get(Url);
  }
  async Validdar_token(): Promise<boolean> {
    const Url = environment.UrlBase + "verify";
    const token = localStorage.getItem('access-token')!.toString();
    if (!!token) {
      let valorControl: boolean = false;
      try {
        await firstValueFrom(this.http.get(Url))
        valorControl = true;
      } catch (reason) {
        valorControl = false;
      }
      return valorControl;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

  getdados(){
    const token: string = localStorage.getItem('access-token')!;
    
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token
    });
  
    
    return this.http.get('http://localhost/api_livre_20/public/user/dados-usuario',{headers});
   }

}


