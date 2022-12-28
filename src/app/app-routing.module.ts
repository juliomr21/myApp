import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { VigilanteGuard } from './vigilante.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { VistaComponent } from './Components/vista/vista.component';
import { TransaccionesComponent } from './Components/transacciones/transacciones.component';
import { Panel2Component } from './Components/panel2/panel2.component';
import { ValideContaSmsComponent } from './Components/valide-conta-sms/valide-conta-sms.component';
import { TetComponent } from './Components/tet/tet.component';
import { AddBeneficiarioComponent } from './Components/add-beneficiario/add-beneficiario.component';
import { RsenhaComponent } from './rsenha/rsenha.component';
import { RsenhaSmsComponent } from './rsenha-sms/rsenha-sms.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { VigilaCriarLoginGuard } from './vigila-criar-login.guard';
import { NovoPagComponent } from './novo-pag/novo-pag.component';

const routes: Routes = [
  {path:'',
   component: HomeComponent,
   canActivate: [VigilaCriarLoginGuard]
  },
  {path:'login',
   component: LoginComponent,
   canActivate: [VigilaCriarLoginGuard]
  },
  {
    path:'formulario',
    component:FormularioComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate: [VigilaCriarLoginGuard]
  },
  {
    path:'rsenha',
    component:RsenhaComponent
  },
  {
    path:'rsenha-sms',
    component:RsenhaSmsComponent
  },
  {
    path:'vista',
    component:VistaComponent,
    canActivate: [VigilanteGuard]
    
  },
  {
    path:'alterar-senha',
    component:AlterarSenhaComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'panel2',
    component: Panel2Component,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'valide-sms',
    component: ValideContaSmsComponent
  },
  {
    path: 'novo-pagamento',
    component: NovoPagComponent,
    // canActivate: [VigilanteGuard]
  },
  {
    path: 'add-beneficiario',
    component:AddBeneficiarioComponent,
    canActivate: [VigilanteGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
