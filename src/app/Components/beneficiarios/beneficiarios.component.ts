import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataStoreService } from '../../data-store.service';
import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.css']
})
export class BeneficiariosComponent implements OnInit {

  datosBeneficiario:any;
  listaBeneficiario:any[] = [];
  
 constructor( private dataS:DataStoreService, private router: Router, private http: HttpServiceService) { }

 ngOnInit(): void {
   
  let Url = environment.UrlBase + 'user/beneficiario'
   this.http.getH(Url).subscribe(res => {this.datosBeneficiario = res; this.listaBeneficiario = this.datosBeneficiario.data});
   
 }
 mover(){
  this.dataS.setVoltar(4);
  this.dataS.setOpcion(10);
  // this.router.navigate(['add-beneficiario']);
 }

}
