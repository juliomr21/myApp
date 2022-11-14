import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../Services/http-service.service';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userLog = '';
  constructor( private dataS:DataStoreService) {

   }

  ngOnInit(): void {
   this.dataS.getUser$().subscribe(res => this.userLog =  res);
  }
 
   logout(){
   localStorage.setItem('access-token','');
   localStorage.setItem('id-token','');
   localStorage.setItem('nome','')
   this.dataS.setUser('');
   }
   login(){
    localStorage.setItem('access-token','');
   }

}
