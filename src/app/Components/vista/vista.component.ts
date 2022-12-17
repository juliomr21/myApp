import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../data-store.service';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

   usuario = "";
   bt = 0;
   datosBeneficiario:any;
   listaBeneficiario:any[] = [];
   temp:any;
  constructor( private dataS:DataStoreService, private router: Router, private http: HttpServiceService) { }

  ngOnInit(): void {
    
   
    this.http.userInfo().subscribe(res => {
       this.temp = res; this.dataS.setUser(this.temp.data.nome);  
       this.usuario = this.temp.data.nome;
       this.http.getBeneficiario().subscribe(res => {this.datosBeneficiario = res; this.listaBeneficiario = this.datosBeneficiario.data});
      })
   
  
  }
  funcion1(op:number){
    this.dataS.setOpcion(op);
   
    this.router.navigate(['panel2']);
  }
  valida_sms(){
    this.router.navigate(['valide-sms'])
  }
}
