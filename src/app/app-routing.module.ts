import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { VigilanteGuard } from './vigilante.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { VistaComponent } from './vista/vista.component';
import { TransaccionesComponent } from './Components/transacciones/transacciones.component';
import { Panel2Component } from './Components/panel2/panel2.component';

const routes: Routes = [
  {path:'',
   component: HomeComponent
  },
  {path:'login',
   component: LoginComponent
  },
  {
    path:'formulario',
    component:FormularioComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'vista',
    component:VistaComponent
  },
  {
    path: 'panel2',
    component: Panel2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
