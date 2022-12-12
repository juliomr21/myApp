import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: ['./panel2.component.css']
})
export class Panel2Component implements OnInit {

  bt = 4;
  simpleStyle =  { 'color': '', 'font': 'normal normal  20px/14px Montserrat' }
  transaccionStyle ={ 'color': '', 'font': 'normal normal  20px/14px Montserrat' }
  minhacontaStyle = { 'color': '', 'font': 'normal normal  20px/14px Montserrat' }
  atentendimentoStyle ={ 'color': '', 'font': 'normal normal  20px/14px Montserrat' }
  Operacion = 'Transações'
  logo_Operacion = 'assets/icon-transaccion.png'
  constructor(private router:Router, private dataS:DataStoreService) { }

  ngOnInit(): void {
    let op = this.dataS.getOpcion();
    this.dataS.getOpcion$().subscribe(res => {this.bt = res; console.log(this.bt)});
    this.funcion1(op);
  }
  funcion1(op: number) {
   // this.bt = op;
   this.dataS.setOpcion(op);
    this.transaccionStyle = { 'color': '', 'font': 'normal normal  20px/14px Montserrat' }
    this.minhacontaStyle = { 'color': '', 'font': 'normal normal  20px/14px Montserrat' }
    this.atentendimentoStyle = { 'color': '', 'font': 'normal normal  20px/14px Montserrat' }
    switch (this.bt) {

      case 1: {
        console.log('op1');
        this.transaccionStyle.color = '#003940';
        this.transaccionStyle.font = 'normal normal bold 20px/14px Montserrat';
        this.Operacion = 'Transações'
        this.logo_Operacion = 'assets/icon-transaccion.png'
      }; break;
      case 2: {
        console.log('op2')
        this.minhacontaStyle.color = '#003940';
        this.minhacontaStyle.font = 'normal normal bold 20px/14px Montserrat'
        this.Operacion = 'Minha conta'
        this.logo_Operacion = 'assets/icon-minha-conta.png'
      };break;
      case 3: {
        console.log('op3')
        this.atentendimentoStyle.color = '#003940';
        this.atentendimentoStyle.font = 'normal normal bold 20px/14px Montserrat'
        this.Operacion = 'Atendimento'
        this.logo_Operacion = 'assets/icon-atendimento.png'
      }
    }
  }
  voltar() {
    this.router.navigate(['vista']);
  }
}
