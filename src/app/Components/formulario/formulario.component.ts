import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  userLog = ''
  userData: any
  form: FormGroup;
  constructor(private fb: FormBuilder, private Http: HttpServiceService) {
    this.form = fb.group({
      nombre: [''],
      nick: [''],
      file: [null]
    })
  }

  ngOnInit(): void {
    this.Http.userInfo().subscribe(res => {
      this.userData = res;
      this.userLog = this.userData.data.nome;
      localStorage.setItem('nome', this.userData.data.nome.toString());
      this.Http.setUser(this.userData.data.nome.toString());
    //   this.userLog = this.userData.data.nome.toString();
      
    });

    //this.Http.gett().subscribe(res => console.log(res));
    // this.userData = this.Http.getUserData();
    // console.log('caca',this.userData);

  }
  f() {

  }
  catch_image(event: any) {
    const files = event.target.files ? event.target.files[0] : '';
    console.log(files);
    // this.form.patchValue({image: files});
    // this.form.get('image')?.updateValueAndValidity();
    var MiFormData = new FormData();
    MiFormData.append('archivo', files);
    console.log(MiFormData.get('archivo'));

  }

}
