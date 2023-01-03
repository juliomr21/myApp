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
  register_ok = false;
  check2 = false;
  text_error = '';
  form: FormGroup;
  constructor(private fb: FormBuilder, private Http: HttpServiceService) {
    this.form = fb.group({
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      rsenha: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required]],
      telefone: [''],
      nome: ['', [Validators.required]]

    })
  }

  ngOnInit(): void {
  }
  criar() {

    if (this.check_acceso()) {
      const Url = environment.UrlBase + "create";

      var data = this.form.value;
      this.Http.post(Url, data).subscribe(res => {
        let temp: any = res;
        if (temp.status == 200) {
          this.register_ok = true;
          this.acceso = false;
          this.form.reset();
        }
        else {
          this.text_error = temp.errors;
          this.acceso = true;

        }

      });
    }
  }
  cambio() {
    this.check1 = !this.check1;
  }
  check_acceso(): boolean {
    this.acceso = true;
    const aux1 = this.form.value.senha;
    const aux2 = this.form.value.rsenha;

    if (aux1 != aux2) {
      this.text_error = "no coinciden las senha"
      return false;
    }

    if (this.check1 == false) {
      this.text_error = "Debe aceptar los terminos de uso y politica de privacidad"
      return false;
    }
    const controls = this.form.controls;
    if (controls["cpf"].invalid) {
      this.text_error = "cpf incorrecto"
      return false
    }
    if (controls["email"].invalid) {
      this.text_error = "mail incorrecto";
      return false;
    }
    if (controls["nome"].invalid) {
      this.text_error = "no ha escrito el nombre";
      return false;
    }
    if (controls["telefone"].invalid) {
      this.text_error = "no ha escrito el telefono";
      return false;
    }
    if (controls["senha"].invalid || controls['rsenha'].invalid) {
      this.text_error = "senha  y confirmacion de senha requeridos";
      return false;
    }

    return true;
  }
  cuenta_creada() {
    this.register_ok = !this.register_ok;
  }

}
