import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {

  constructor(private dataS: DataStoreService) { }

  ngOnInit(): void {
  }
 funcion1(op:number){
  if(op == 5)
  this.dataS.setOpcion(5);
  else
  this.dataS.setOpcion(6);
  this.dataS.setVoltar(3);
 }
}
