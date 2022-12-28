import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Persona{
  nombre: string;
  apellido: string;
  empresa: string;
  sueldo: number;
  telefono: number;
}

@Injectable({
  providedIn: 'root'
})


export class DataStoreService {

  private user: string;
  private user$: Subject<string>;
  private userData: any;
  private userData$: Subject<any>;
  private opcion: number;
  private opcion$: Subject<number>
  private voltar:number;

  constructor() { 
    this.user = '';
    this.user$ = new Subject<string>();
    this.userData = {};
    this.userData$ = new Subject<any>();
    this.opcion = 2;
    this.opcion$ = new Subject<number>();
    this.voltar = 0;
  }
  setVoltar(op:number){this.voltar = op;}
  setUserData(userTemp: any) {
   // console.log(userTemp)
    this.userData = userTemp;
    this.userData$.next(this.userData);
  }
  setUser(usuario: string) {
    this.user = usuario;
    this.user$.next(this.user);
  }
  setOpcion(op:number){
    this.opcion = op;
    this.opcion$.next(this.opcion);
  }
  getVoltar(){return this.voltar;}
  getOpcion(){return this.opcion};
  getOpcion$():Observable<number>{return this.opcion$.asObservable();}
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

}
