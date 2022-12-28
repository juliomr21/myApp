import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valide-conta-sms',
  templateUrl: './valide-conta-sms.component.html',
  styleUrls: ['./valide-conta-sms.component.css']
})
export class ValideContaSmsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  pagamento(){
    this.router.navigate(['novo-pagamento']);
  }

}
