import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../data-store.service';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../Services/http-service.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

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
   max_pago = environment.MaxPago;
   parcelas = environment.CantParcelas;
  constructor( private dataS:DataStoreService, private router: Router, private http: HttpServiceService) { }

  ngOnInit(): void {
    
   
   
 this.cargar_datos();
   
  
  }
   async cargar_datos(){
   const Url:string = environment.UrlBase + 'user/beneficiario';
    try{
      this.usuario = localStorage.getItem('nome')!;
      const response:any = await firstValueFrom(this.http.getH(Url));
      this.listaBeneficiario = response.data;
           
    }
    catch( reason){
      localStorage.setItem('access-token','');
      localStorage.setItem('id-token','');
      localStorage.setItem('nome','')
      this.dataS.setUser('');
      this.router.navigate(['login'])}
   
  }
  funcion1(op:number){
    this.dataS.setOpcion(op);
   
    this.router.navigate(['panel2']);
  }
  valida_sms(){
    this.router.navigate(['valide-sms'])
  }
}
