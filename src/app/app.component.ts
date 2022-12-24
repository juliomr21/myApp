import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from './Services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { DataStoreService } from './data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livre.trade';
  constructor(private dataS:DataStoreService){}
  ngOnInit(){
    this.dataS.setUser(localStorage.getItem('nome')!);
    //  localStorage.setItem('access-token','');
  }

}

