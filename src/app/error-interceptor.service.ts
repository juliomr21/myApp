import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  construct() {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error) => {
        console.log('entre aqui al')
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          console.log('error en el cliente')
          // client-side error
         // errorMessage = `Client-side error: ${error.error.message}`;
          errorMessage = `Client-side error: `;
        } else {
          // backend error
         // errorMessage = `Server-side error: ${error.status} ${error.message}`;
          errorMessage = `Server-side error:${error.status}`;
        }
        
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
       // this.errorService.show(errorMessage);
     
       console.log(errorMessage);
       return throwError(()=> errorMessage);
      })
    );
  }
}

