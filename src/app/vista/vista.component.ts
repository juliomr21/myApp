import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';

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
   
  constructor( private dataS:DataStoreService, private router: Router, private http: HttpServiceService) { }

  ngOnInit(): void {
    
    this.usuario = this.dataS.getUser();
    this.http.getBeneficiario().subscribe(res => {this.datosBeneficiario = res; this.listaBeneficiario = this.datosBeneficiario.data});
    console.log(this.usuario);
  }
  funcion1(){
    this.router.navigate(['panel2']);
  }

}
