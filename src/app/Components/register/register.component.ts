import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/Services/http-service.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
check1 = false;
acceso = false;
check2 = false;
text_error = '';
  form: FormGroup;
  constructor(private fb: FormBuilder,private Http:HttpServiceService) { 
   this.form = fb.group({
      cpf:['',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
      senha: ['',[Validators.required,Validators.minLength(8)]],
      rsenha: ['',[Validators.required,Validators.minLength(8)]],
      email: ['',[Validators.required]],
      telefone:[''],
      nome: ['',[Validators.required]]

    })
  }

  ngOnInit(): void {
  }
  criar(){
    if(this.check_acceso()){
    const Url = environment.UrlBase + "create";
    
    var data = this.form.value;
    this.Http.post(Url,data).subscribe(res => console.log(res));
    }
  }
  cambio(){
    this.check1 = !this.check1;
  }
  check_acceso():boolean{
    this.acceso = true;
    const aux1 = this.form.value.senha;
    const aux2 = this.form.value.rsenha;
    console.log(aux2);
    if(aux1 != aux2){console.log("mmm");
    this.text_error = "no coinciden las senha"
    return false;
  }
   
    if(this.check1 == false)
    {
      this.text_error = "Debe aceptar los terminos de uso y politica de privacidad"
      return false;
    }
    const controls = this.form.controls;
    if(controls["cpf"].invalid)
    {
      this.text_error = "cpf incorrecto"
      return false
    }
    if(controls["email"].invalid)
    {
      this.text_error = "mail incorrecto";
      return false;
    }
    if(controls["nome"].invalid){
      this.text_error = "no ha escrito el nombre";
      return false;
    }
    if(controls["telefone"].invalid)
    {
      this.text_error = "no ha escrito el telefono";
      return false;
    }

    return true;
  }

}
