import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,private Http:HttpServiceService) { 
   this.form = fb.group({
      nombre:[''],
      nick: [''],
      file: [null]
    })
  }

  ngOnInit(): void {
    // const s = localStorage.getItem('rr');
    // let kk = 5 + s!;
    // console.log(kk);
  }
  f(){

  }
  catch_image(event: any){
    const files = event.target.files ? event.target.files[0]:'';
    console.log(files);
    // this.form.patchValue({image: files});
    // this.form.get('image')?.updateValueAndValidity();
    var MiFormData = new FormData();
    MiFormData.append('archivo',files);
    console.log(MiFormData.get('archivo'));

  }

}
