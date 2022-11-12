import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from 'src/app/Services/http-service.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,private Http:HttpServiceService) { 
   this.form = fb.group({
      cpf:[0],
      senha: [''],
      email: [''],
      telefone:[0],
      nome: ['']

    })
  }

  ngOnInit(): void {
  }
  criar(){
    const Url = environment.UrlBase + "create";
    var data = this.form.value;
    this.Http.post(Url,data).subscribe(res => console.log(res));
  }

}
