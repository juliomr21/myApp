import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from './Services/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private cookie: CookieService, private http: HttpServiceService, private router: Router) { }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   // return this.http.Validdar_token();
   return this.validar_temp();
  }

  validar_temp(){
    var token = localStorage.getItem('access-token');
    if(token)return true;
    return false;
  }

}



