import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-registro/login/login.component';
import { RegistroComponent } from './login-registro/registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductoComponent } from './producto/producto.component';
import { SeguridadService } from './servicio/seguridad.service';
import { ReserPassComponent } from './reser-pass/reser-pass.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'producto', component: ProductoComponent, canActivate: [SeguridadService]},
  { path: 'login', component: LoginComponent},
  { path: 'restPass', component: ReserPassComponent},
  { path: 'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
