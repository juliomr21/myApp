import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

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
    if(this.form.controls['nova_senha'].invalid || this.form.controls['confirm'].invalid)
    {
      this.acceso = true;
      this.text_error = "AAA nova senha y confirmacion requeridas con al menos 8 caracteres";
      return;
    }
    if(this.form.value.nova_senha == this.form.value.confirm)
    { let Url = environment.UrlBase + 'user/redefinir-senha';
      this.http.postH(Url,this.form.value).subscribe(
        res=>{ 
          let temp:any = res;
          if(temp.errors)
          {
            this.acceso = true;
            this.text_error = "Senha atual incorreta";
          }
          else
          this.form.reset();
                        
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
