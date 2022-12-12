import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-mina-conta',
  templateUrl: './mina-conta.component.html',
  styleUrls: ['./mina-conta.component.css']
})
export class MinaContaComponent implements OnInit {

  constructor(private dataS: DataStoreService) { }

  ngOnInit(): void {
  }
 funcion1(op:number){
  //let temp = this.dataS.getOpcion();
  this.dataS.setVoltar(2);
  this.dataS.setOpcion(op);
 }
}
