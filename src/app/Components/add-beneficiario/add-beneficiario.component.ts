import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-beneficiario',
  templateUrl: './add-beneficiario.component.html',
  styleUrls: ['./add-beneficiario.component.css']
})
export class AddBeneficiarioComponent implements OnInit {
  text_gray = {color: "#9CB2B5"}
  text_black = {color: "#003940",}
  text_pix = {color: "#9CB2B5"}
  text_ted = {color: "#9CB2B5"}
  borde_blue = {border: "3px solid #32ECCD"}
  borde_gray = {border: "3px solid #F3FAFA"}
  borde_pix = this.borde_gray
  borde_ted = this.borde_gray
  operacion = 0;
  constructor() { }

  ngOnInit(): void {
  }
  tipo_operacion(op:number){
    if(op == 1)
    {this.text_pix = this.text_black;
      this.text_ted = this.text_gray;
      this.operacion = 1;
      this.borde_pix = this.borde_blue;
      this.borde_ted = this.borde_gray;
    }
    else
    {this.text_ted = this.text_black;
      this.text_pix = this.text_gray;
      this.operacion = 2;
      this.borde_pix = this.borde_gray;
      this.borde_ted = this.borde_blue;

    }
    
  }
}
