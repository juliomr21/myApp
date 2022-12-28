import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {
 acceso =false;
 text_error = '';
  form:FormGroup
  constructor(private http:HttpServiceService,private fb:FormBuilder) { 
    this.form = fb.group({
      senha:['',[Validators.required,Validators.minLength(8)]],
      nova_senha:['',[Validators.required,Validators.minLength(8)]],
      confirm: ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }
  cambiar_senha(){
    if(this.form.value.nova_senha == this.form.value.confirm)
    {
      this.http.cambiar_senha(this.form.value).subscribe(
        res=>{ 
        
          try
          {
            this.form.reset();
             console.log(res)  ;
          }
          catch{
            this.acceso = true;
            this.text_error = "AAA senha actual incorrecto "
          }
          
         });

    }
    else
    {
      this.acceso = true;
      this.text_error = "AAA nova senha y confirmacion no son iguales "
    }
   
    // console.log(this.form.value);
  }
}
