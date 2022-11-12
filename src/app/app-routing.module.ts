import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { VigilanteGuard } from './vigilante.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Components/register/register.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
