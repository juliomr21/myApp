import { Component, OnInit } from '@angular/core';
import { delay, firstValueFrom } from 'rxjs';
import { HttpServiceService } from '../../Services/http-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {


  dados_pessoais: any = [];
  post_activo = false;
  endereco: any = [];
  estado = true;
  edit_dados = 'Editar'
  estado_endereco = true;
  edit_endereco = 'Editar'
  id = 0;
  id_dados = 0;
  form: FormGroup;
  form_end: FormGroup;
  constructor(private http: HttpServiceService, private fb: FormBuilder, private dataS:DataStoreService) {
    this.form = fb.group({

      nome: [''],
      email: [''],
      telefone: [''],
      cpf: [''],

    });
    this.form_end = fb.group({
      cep: ['00000000'],
      endereco: ['NA'],
      numero: ['0'],
      complemento: ['NA'],
      bairro: ['NA'],
      estado: ['NA'],
      cidade: ['Desconocido'],
      renda: ['0']
    })
  }
  ngOnInit(): void {

    this.cargar_datos_user();
    this.form.disable();
    this.form_end.disable();

  }

  Editar_dados_pessoais() {
    if (this.estado) {
      this.edit_dados = 'Salvar';
      this.form.enable();
    }
    else {
      this.form.disable();
      this.edit_dados = 'Editar'
      this.http.actualizar_dados_pesoais(this.form.value, this.id).subscribe(() =>{
      localStorage.setItem('nome',this.form.value.nome );
      this.dataS.setUser(this.form.value.nome);
      });
    } 
     
    this.estado = !this.estado;

  }
  Editar_endereco() {
    if (this.estado_endereco) {
      this.edit_endereco = 'Salvar'
      this.form_end.enable();
    }
    else {
      this.edit_endereco = 'Editar';
      this.form_end.disable();
      if(this.post_activo)
      {
        let Url = environment.UrlBase + 'user/dados-usuario';
        const data = this.form_end.value;
        this.http.postH(Url,data).subscribe(res =>{
          let endereco_temp:any = res;
          this.id_dados = endereco_temp.id;
          console.log(res);
        });
        this.post_activo = false;
      }
      else
      this.http.actualizar_endereco(this.form_end.value, this.id_dados).subscribe(res => console.log(res));

    }
    this.estado_endereco = !this.estado_endereco;
  }
  cargar_datos_user() {

    let id = localStorage.getItem('id-token')!
    let Url = environment.UrlBase + `user/usuarios/${id}`;
    this.http.getH(Url).subscribe(
      res => {
       
        let temp: any = res;
        this.dados_pessoais = temp.data;
        this.form.setValue({
          nome: this.dados_pessoais.nome,
          email: this.dados_pessoais.email,
          telefone: this.dados_pessoais.telefone,
          cpf: this.dados_pessoais.cpf

        });
        this.id = this.dados_pessoais.id_usuario;
        this.cargar_datos_endereco();
      }
    );

  }
  async cargar_datos_endereco() {

    
      let Url = environment.UrlBase + 'user/dados-usuario'
      const response: any = await firstValueFrom(this.http.getH(Url));
      this.endereco = response.data;
      if(response.errors)
      {
        this.post_activo = true;
      }else{
      this.form_end.setValue({
        cep: this.endereco.cep,
        endereco: this.endereco.endereco,
        numero: this.endereco.numero,
        complemento: this.endereco.complemento,
        bairro: this.endereco.bairro,
        estado: this.endereco.estado,
        cidade: this.endereco.cidade,
        renda: this.endereco.renda

      })
      this.id_dados = this.endereco.id_dados_usuario
    }  
   
  }
}
