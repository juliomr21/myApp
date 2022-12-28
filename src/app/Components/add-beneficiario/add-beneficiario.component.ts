import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  operacion = -1;
  beneficiario = {
    "cpf": "16319009004",
    "nome": "usuario dos",
    "tipo_deposito": 1,
    "cod_banco": "001",
    "agencia": "9093",
    "conta": "20201",
    "digito": "2",
    "tipo_conta": "1"
}
bancos:any;
form: FormGroup;
  constructor(private http:HttpServiceService, private fb:FormBuilder) { 
    this.form = fb.group({
      cpf:[''],
      email: [''],
      telefone:[],
      nome: [''],
      tipo_deposito: [''],
      cod_banco: ['0'],
      agencia: [''],
      conta: [''],
      digito: 2,
      tipo_conta: ['0']
    })
  }

  ngOnInit(): void {
    this.http.get_banco().subscribe(res=> { 
      let temp:any = res;  this.bancos = temp.data;
     });
  }
  tipo_operacion(op:number){
    if(op == 0)
    {this.text_pix = this.text_black;
      this.text_ted = this.text_gray;
      this.operacion = 0;
    
      this.borde_pix = this.borde_blue;
      this.borde_ted = this.borde_gray;
    }
    else
    {this.text_ted = this.text_black;
      this.text_pix = this.text_gray;
      this.operacion = 1;
     
      this.borde_pix = this.borde_gray;
      this.borde_ted = this.borde_blue;

    }
    
  }
  add_beneficiario(){
    this.http.add_beneficiario(this.form.value).subscribe();
  }
  pre_val(){
    var aux = this.form.value.agencia;
     const digito = aux.slice(0,1);
     const agencia = aux.slice(1,aux.length)
  

  var  benef = {
      cpf:this.form.value.cpf,
      email: this.form.value.email,
      telefone:this.form.value.telefone,
      nome: this.form.value.nome,
      tipo_deposito: this.operacion,
      cod_banco: this.form.value.cod_banco,
      agencia: agencia,
      conta: this.form.value.conta,
      digito: digito,
      tipo_conta: this.form.value.tipo_conta
    }
    this.http.add_beneficiario(benef).subscribe(()=>this.form.reset);
  }
}
