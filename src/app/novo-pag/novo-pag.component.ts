import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-pag',
  templateUrl: './novo-pag.component.html',
  styleUrls: ['./novo-pag.component.css']
})
export class NovoPagComponent implements OnInit {

  vista = 1;
  constructor() { }

  ngOnInit(): void {
  }
  proximo(){
    this.vista++;
  }
  voltar(){
    this.vista--;
  }
}
