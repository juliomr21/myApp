import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userLog = '';
  constructor(private http:HttpServiceService) {

   }

  ngOnInit(): void {
   this.http.getUser$().subscribe(res => this.userLog =  res);
  }
 
   logout(){
   localStorage.setItem('access-token','');
   this.http.setUser('');
   }
   login(){
    localStorage.setItem('access-token','');
   }

}
