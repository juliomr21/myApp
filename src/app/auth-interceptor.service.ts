import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('access-token')!;
        let request = req;
       
        if (!!token) {
            request = req.clone({
                setHeaders: {
                    // "Content-Type": "application/json",
                    "token": token
                }
            });

        }
        return next.handle(request);
    }
}