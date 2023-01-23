import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './Componentes/datos/datos.component';
import { LoginComponent } from './Componentes/login/login.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'datos', component: DatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
