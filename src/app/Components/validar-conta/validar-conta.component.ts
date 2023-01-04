import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DataStoreService } from '../../data-store.service';
@Component({
  selector: 'app-validar-conta',
  templateUrl: './validar-conta.component.html',
  styleUrls: ['./validar-conta.component.css']
})
export class ValidarContaComponent implements OnInit {
 alterar = true;
 numero = '';
 numero_nuevo = '';
 sms = ''
 text_error = '';
 acceso = false;
 telf_val = false;
 solicitud_aprobada = false;
 estado_telf = 100;
  constructor(private http: HttpServiceService, private dataS: DataStoreService) { }
 
  ngOnInit(): void {
   
   this.cargar_datos();
   
  
  }
  cargar_datos(){

    let id = localStorage.getItem('id-token')!
    let Url = environment.UrlBase + `user/usuarios/${id}`;
    this.http.getH(Url).subscribe(res=>{
      let temp:any = res;
      this.numero = temp.data.telefone;
      this.estado_telf = temp.data.estado;
    });

  }
 alterar_num(){
  this.alterar = false;
 }
 solicitar_token(){
  const data = {telefone: this.numero_nuevo};
  // console.log(this.numero_nuevo); 
  let Url = environment.UrlBase + `user/validar-conta`
  this.http.postH(Url,data).subscribe(res =>{
    const nueva_solicitud:any = res;
    if(nueva_solicitud.errors)
    {
      this.text_error = "Formato incorreto do telefone"
      this.acceso = true;
    }
    else
    { 
      this.acceso = false;
      this.solicitud_aprobada = true;
      
    }
   
    })
  // this.http.solicitar_token(data).subscribe(
  //   res => console.log(res)
  // );
 }
 salvar(){
 const data = {token: this.sms};
//  console.log(data);
 let Url = environment.UrlBase + `user/validar-token`
 this.http.postH(Url,data).subscribe(res =>{
  // console.log(res);
  const nuevo_token:any = res;
  // console.log(nuevo_token);
  if(nuevo_token.status != 200)
   {
     this.text_error = "Token não válido ou expirado!"
     this.acceso = true;
   }
   else
   {
    this.telf_val = true;
    localStorage.setItem('access-token',nuevo_token.token);
    this.acceso = false;
    this.sms='';
    this.numero_nuevo ='';
   
    this.alterar = true;
    this.cargar_datos();
     
   }
 
} );
// //  this.http.validar_token(data).subscribe(res =>{console.log(res);
// //   const nuevo_token:any = res;
// //   localStorage.setItem('access-token',nuevo_token.token);
// } );
 }
}
