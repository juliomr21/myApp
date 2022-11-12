import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { firstValueFrom, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private user: string;
  private user$: Subject<string>;
  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {
    this.user = '';
    this.user$ = new Subject<string>();
  }

  post(Url: string, data: any) {
    return this.http.post(Url, data);
  }

  gett() {
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjgyMjAwODIsImV4cCI6MTY2ODI0ODg4MiwiZGF0YSI6eyJ1c2VyIjoiMTA2IiwiZXN0YWRvIjoiMSIsImFjY2VzcyI6IlVTRVIifX0.m5CO9yCjxROGI8d0vk-IpWDyJ5Mt7WiP9WPM_4rzdTg";
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjgyMjAwODIsImV4cCI6MTY2ODI0ODg4MiwiZGF0YSI6eyJ1c2VyIjoiMTA2IiwiZXN0YWRvIjoiMSIsImFjY2VzcyI6IlVTRVIifX0.m5CO9yCjxROGI8d0vk-IpWDyJ5Mt7WiP9WPM_4rzdTg",
    });
    return this.http.get("http://localhost/api_livre_20/public/user/usuarios/106", { headers });

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

}

