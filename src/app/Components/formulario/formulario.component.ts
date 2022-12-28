import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpServiceService } from '../../Services/http-service.service';
import { DataStoreService } from '../../data-store.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 tempfile: any = [];

  userLog = ''
  userData: any
  tempData: any
  form1: FormGroup;
  // /************************** */
  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg:string = '';
  final:Boolean = true;
  msn:string = '';
  // *********************************
  constructor(
    private fb: FormBuilder, 
    private Http: HttpServiceService,
    private dataS:DataStoreService,
    private httpc:HttpClient
    ) {
    this.form1 = fb.group({
      
      arquivo: [null]
    })
  }

  ngOnInit(): void {
    // this.Http.userInfo().subscribe(res => {
    //   this.userData = res;
     
    //   //console.log(res);
    //   // this.userLog = this.userData.data.nome;
    //   // localStorage.setItem('nome', this.userData.data.nome.toString());
    //   // this.Http.setUser(this.userData.data.nome.toString());
    // //   this.userLog = this.userData.data.nome.toString();
      
    // });

    //this.Http.gett().subscribe(res => console.log(res));
    // this.userData = this.Http.getUserData();
    // console.log('caca',this.userData);
    this.msn = "Subir una imagen no mayor de 10MB";

  }
  // upload() {
   
  //   this.Http.upload(this.form1.value.arquivo).subscribe(res => console.log(res));
  //   }
  // catch_image(event: any) {
  //   var archivo = event.target.files ? event.target.files[0] : '';
  //   console.log('archivo cargado ',archivo);
  //   let formD = new FormData();
  //   formD.append('arquivo',archivo);
  // // formD.append("arquivo", "C:\\Users\\Julio\\Pictures\\argentina.png");
  //   console.log('archivo enviado al servidor usando "Content-Type": "application/x-www-form-urlencoded" ',formD);
  //    this.Http.uploadImage(formD).subscribe(res=>console.log(res));
  // //  this.form.patchValue({
  // //   image:archivo
  // //  });
  // //   //console.log(this.tempfile);
  // //   // this.form.patchValue({image: files});
  // //   this.form.get('image')?.updateValueAndValidity();
   
  //  // console.log(MiFormData.get('archivo'));

  // }
  // catch_image1(event: any) {
  //   var archivo = event.target.files ? event.target.files[0] : '';
  //   console.log('archivo cargado',archivo);
  //   this.form1.patchValue({
  //   arquivo:archivo
  //  });
  //   //console.log(this.tempfile);
  //   // this.form.patchValue({image: files});
  //   this.form1.get('arquivo')?.updateValueAndValidity();
  //  }
  
  // subiendoando(ev:any){
  //   let img:any = ev.target;
  //   console.log('archivo capturado',img.files[0])
  //   if(img.files.length > 0){
  //     this.loader = true;
  //     let form = new FormData();
  //     form.append('arquivo',img.files[0]);
  //     console.log('archivo enviado al servidor con  "Content-Type": "application/json"',form);
  //     this.Http.subirImagen(form).subscribe(
  //       resp => {
  //         console.log(resp);
  //         this.loader = false;
  //         if(resp.status){ 
  //           this.trueimg = true;
  //          this.msn = "Gracias por visitar unprogramador.com"
  //         }
  //       },
        
  //     );

  //   }

  // }
  // subiendoando1(ev:any){
  //   let img:any = ev.target;
  //   console.log('archivo capturado',img.files[0])
  //   if(img.files.length > 0){
  //     this.loader = true;
  //     let form = new FormData();
  //     form.append('arquivo',img.files[0]);
  //     console.log('archivo enviado al servidor con   "Content-Type": "application/x-www-form-urlencoded"',form);
  //     this.Http.subirImagen(form).subscribe(
  //       resp => {
  //         console.log(resp);
  //         this.loader = false;
  //         if(resp.status){ 
  //           this.trueimg = true;
  //          // this.myimg = environment.ruta+resp.generatedName;
  //           this.msn = "Gracias por visitar unprogramador.com"
  //         }
  //       },
  //       // error => {
  //       //   this.loader = false;
  //       //   alert('Imagen supera el tamaño permitido');
          
  //       // }
  //     );

  //   }

  // }


}
