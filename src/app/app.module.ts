import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ErrorInterceptor } from './error-interceptor.service';
import { RegisterComponent } from './Components/register/register.component';
import { CpfPipePipe } from './Pipe/cpf-pipe.pipe';
import { VistaComponent } from './vista/vista.component';
import { TransaccionComponent } from './src/appsrc/app/Components/transaccion/transaccion.component';
import { TransaccionesComponent } from './Components/transacciones/transacciones.component';
import { Panel2Component } from './Components/panel2/panel2.component';
import { MinaContaComponent } from './mina-conta/mina-conta.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    CpfPipePipe,
    VistaComponent,
    TransaccionComponent,
    Panel2Component,
    TransaccionesComponent,
    MinaContaComponent,
    AtendimentoComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
 // providers: [CookieService,{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor , multi: true }],
  providers: [CookieService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
