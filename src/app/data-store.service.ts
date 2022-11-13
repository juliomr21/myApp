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

  constructor() { 
    this.user = '';
    this.user$ = new Subject<string>();
    this.userData = {};
    this.userData$ = new Subject<any>();
  }
  setUserData(userTemp: any) {
   // console.log(userTemp)
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

}
