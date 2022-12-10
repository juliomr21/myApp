import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

   usuario = "";
   bt = 0;
  constructor( private dataS:DataStoreService, private router: Router) { }

  ngOnInit(): void {
    
    this.usuario = this.dataS.getUser();
    console.log(this.usuario);
  }
  funcion1(){
    this.router.navigate(['panel2']);
  }

}
