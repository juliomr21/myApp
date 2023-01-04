import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpServiceService } from '../Services/http-service.service';
import { timer, interval, Observable, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-novo-pag',
  templateUrl: './novo-pag.component.html',
  styleUrls: ['./novo-pag.component.css']
})
export class NovoPagComponent implements OnInit {
  monto = 0;
  monto_parcela = 0;
  disponible = 0;
  parcelas = 12;
  vista = 1;
  // source = timer(0,1000);
  clock:any;
  now:any;
  end:any;
  source = interval(1000);
  flag = true;
  kkk:any
  constructor(private http:HttpServiceService) { }

  ngOnInit(): void {
    // this.clock = this.source.subscribe(res => console.log(res));
  }
  f(){

    
    let stop:any;
       this.kkk = this.source.subscribe(val => {stop = val;
       console.log(stop);
      
        if(stop == 3)
        {
          this.calcular();
          this.kkk.unsubscribe();
        }
        
      });
      
   
  }
  f1(){
    const key$ = fromEvent(document,"keydown");
    this.kkk.pipe(takeUntil(key$)).subscribe();
  }
  proximo(){
    this.vista++;
  }
  voltar(){
    this.vista--;
  }
  calcular(){
    let data = {valor: this.monto, parcelas: this.parcelas};
    let Url = environment.UrlBase + 'user/simular';
    this.http.postH(Url,data).subscribe(res =>{
      let temp_monto:any = res;
      this.disponible = temp_monto.simulation.valor_cobrado;
      this.monto_parcela = temp_monto.simulation.valor_parcela;

      console.log(temp_monto.simulation)} );
  }
}
