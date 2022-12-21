import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsenha',
  templateUrl: './rsenha.component.html',
  styleUrls: ['./rsenha.component.css']
})
export class RsenhaComponent implements OnInit {
 cpf_fail = ''
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  proximo(){
    this.router.navigate(['rsenha-sms']);
  }

}
