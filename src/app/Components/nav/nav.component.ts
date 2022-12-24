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

  userLog:any;
  
  navAzul = {background: "#ECF3F3"}
  navBlanco = {background: "#FFFFFF"}
  navColor = this.navBlanco;
  constructor( private dataS:DataStoreService) {
    dataS.getUser$().subscribe(res => {
      this.userLog =  res;
      if(this.userLog!="")
       this.navColor = this.navAzul;
      else
      this.navColor = this.navBlanco;
    });
   
   }

  ngOnInit(): void {
   this.dataS.getUser$().subscribe(res => {
    this.userLog =  res;
    if(this.userLog!="")
     this.navColor = this.navAzul;
    else
    this.navColor = this.navBlanco;
  });
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
