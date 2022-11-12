import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { firstValueFrom, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private user:string;
  private user$: Subject<string>;
  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {
    this.user = '';
    this.user$ = new Subject<string>();
   }
 
  post(Url: string, data:any) {
    return this.http.post(Url, data);
  }
  get(Url: string) {
    return this.http.get(Url);
  }
  async Validdar_token(): Promise<boolean>{
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
  
}
interface user_log {
  email: string,
  password: string
}
