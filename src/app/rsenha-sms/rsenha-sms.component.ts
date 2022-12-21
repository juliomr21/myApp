import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsenha-sms',
  templateUrl: './rsenha-sms.component.html',
  styleUrls: ['./rsenha-sms.component.css']
})
export class RsenhaSmsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  alterar_senha(){
    this.route.navigate(['alterar-senha']);
  }
}
