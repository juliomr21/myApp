import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  constructor(private http: HttpServiceService) { }

  ngOnInit(): void {
  }

}
