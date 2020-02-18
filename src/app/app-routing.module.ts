import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-registro/login/login.component';
import { RegistroComponent } from './login-registro/registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'inicio', component: PrincipalComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'carrito', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
