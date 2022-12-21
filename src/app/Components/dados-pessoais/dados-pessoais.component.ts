import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  constructor(private http: HttpServiceService) { }
  dados_pessoais: any = [];
  endereco: any = [];
  ngOnInit(): void {
    this.http.userInfo().subscribe(res => {
      let temp_dados: any = res;
      this.dados_pessoais = temp_dados.data;
    });
    this.http.getdados().subscribe(res => {
      let temp_endereco: any = res;
      this.endereco = temp_endereco.data;
    });
  }

}
