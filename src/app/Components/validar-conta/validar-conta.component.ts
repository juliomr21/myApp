import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-validar-conta',
  templateUrl: './validar-conta.component.html',
  styleUrls: ['./validar-conta.component.css']
})
export class ValidarContaComponent implements OnInit {
 alterar = true;
 numero = '';
 numero_nuevo = 0;
 sms = 0
  constructor(private http: HttpServiceService) { }
 
  ngOnInit(): void {
   
    let id = localStorage.getItem('id-token')!
    let Url = environment.UrlBase + `user/usuarios/${id}`;
    this.http.getH(Url).subscribe(res=>{
      let temp:any = res;
      this.numero = temp.data.telefone;
      console.log(temp.data.telefone)});
   
    // this.http.userInfo().subscribe(res=>{
    //   let temp:any = res;
    //   this.numero = temp.data.telefone;
    //   console.log(temp.data.telefone)});
  }
 alterar_num(){
  this.alterar = false;
 }
 solicitar_token(){
  const data = {telefone: this.numero_nuevo};
  console.log(this.numero_nuevo); 
  let Url = environment.UrlBase + `user/validar-conta`
  this.http.postH(Url,data).subscribe(res =>console.log(res))
  // this.http.solicitar_token(data).subscribe(
  //   res => console.log(res)
  // );
 }
 salvar(){
 const data = {token: this.sms};
 console.log(data);
 let Url = environment.UrlBase + `user/validar-token`
 this.http.postH(Url,data).subscribe(res =>{console.log(res);
  const nuevo_token:any = res;
  localStorage.setItem('access-token',nuevo_token.token);
} );
// //  this.http.validar_token(data).subscribe(res =>{console.log(res);
// //   const nuevo_token:any = res;
// //   localStorage.setItem('access-token',nuevo_token.token);
// } );
 }
}
