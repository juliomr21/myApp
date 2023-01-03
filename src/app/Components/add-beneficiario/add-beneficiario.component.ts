import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-add-beneficiario',
  templateUrl: './add-beneficiario.component.html',
  styleUrls: ['./add-beneficiario.component.css']
})
export class AddBeneficiarioComponent implements OnInit {
  text_gray = { color: "#9CB2B5" }
  text_black = { color: "#003940", }
  text_pix = { color: "#9CB2B5" }
  text_ted = { color: "#9CB2B5" }
  borde_blue = { border: "3px solid #32ECCD" }
  borde_gray = { border: "3px solid #F3FAFA" }
  borde_pix = this.borde_gray
  borde_ted = this.borde_gray
  benef = {};
  operacion = -1;
  acceso = false;
  text_error = '';
  beneficiario = {
    "cpf": "16319009004",
    "nome": "usuario dos",
    "tipo_deposito": 1,
    "cod_banco": "001",
    "agencia": "9093",
    "conta": "20201",
    "digito": "2",
    "tipo_conta": "1",
    "tipo_chave": "1",
    "chave_pix": "00000000000"
  }
  bancos: any;
  form: FormGroup;
  constructor(private http: HttpServiceService, private fb: FormBuilder, private router: Router, private dataS: DataStoreService) {
    this.form = fb.group({
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.email]],
      telefone: [],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      tipo_deposito: ['', [Validators.required]],
      cod_banco: ['0', [Validators.required]],
      agencia: ['', [Validators.required]],
      conta: ['', [Validators.required]],
      digito: ['', [Validators.required]],
      tipo_conta: ['0', [Validators.required]],
      tipo_chave: ['-1', [Validators.required]],
      chave_pix: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    let Url = environment.UrlBase + 'bancos'
    this.http.getH(Url).subscribe(res => {
      let temp: any = res; this.bancos = temp.data;
    });
  }
  tipo_operacion(op: number) {
    if (op == 0) {
      this.text_pix = this.text_black;
      this.text_ted = this.text_gray;
      this.operacion = 0;

      this.borde_pix = this.borde_blue;
      this.borde_ted = this.borde_gray;
    }
    else {
      this.text_ted = this.text_black;
      this.text_pix = this.text_gray;
      this.operacion = 1;

      this.borde_pix = this.borde_gray;
      this.borde_ted = this.borde_blue;

    }

  }

  pre_val() {


    if (this.operacion == 0) {
      this.benef = {
        cpf: this.form.value.cpf,
        email: this.form.value.email,
        telefone: this.form.value.telefone,
        nome: this.form.value.nome,
        tipo_deposito: this.operacion,
        tipo_chave: this.form.value.tipo_chave,
        chave_pix: this.form.value.chave_pix
      }
    } else {
      this.benef = {
        cpf: this.form.value.cpf,
        email: this.form.value.email,
        telefone: this.form.value.telefone,
        nome: this.form.value.nome,
        tipo_deposito: this.operacion,
        cod_banco: this.form.value.cod_banco,
        agencia: this.form.value.agencia,
        conta: this.form.value.conta,
        digito: this.form.value.digito,
        tipo_conta: this.form.value.tipo_conta

      }

    }
    if (this.valida_transf()) {

      let Url = environment.UrlBase + 'user/beneficiario'
      this.http.postH(Url, this.benef).subscribe(res => {
        let temp: any = res;
        console.log(res);
        if (temp.status == 201) {
          this.dataS.setOpcion(4);
          this.form.reset();
        }
        else {

        }

      });
    }
    else {
      this.acceso = true;
    }

  }
  valida_transf(): boolean {
    const controls = this.form.controls;

    if (this.operacion == -1) {
      this.text_error = "debe seleccionar tipo de transferencia (PIX o TED)"
      return false;
    }
    if (controls["cpf"].invalid) {
      this.text_error = "cpf incorrecto"
      return false;
    }
    if (controls["nome"].invalid) {
      this.text_error = "nombre debe tener al menos 3 letras";
      return false;
    }
    if (controls["tipo_chave"].invalid && this.operacion == 0) {
      this.text_error = "debe seleccionar una chave";
      return false
    }
    if (controls["chave_pix"].invalid && this.operacion == 0) {
      this.text_error = "debe ecribir una chave";
      return false
    }
    if (this.form.value.tipo_conta == 0 && this.operacion == 1) {
      this.text_error = "debe seleccionar un tipo de cuenta";
      return false;
    }
    if (this.form.value.cod_banco == 0 && this.operacion == 1) {
      this.text_error = "debe seleccionar un banco";
      return false;
    }
    if (controls["conta"].invalid && this.operacion == 1) {
      this.text_error = " debe poner cuenta"
      return false;
    }
    if (controls["digito"].invalid && this.operacion == 1) {
      this.text_error = "digito requerido";
      return false;
    }
    if (controls["agencia"].invalid && this.operacion == 1) {
      this.text_error = "agencia requerida";
      return false;
    }


    return true;
  }
  
 
}
