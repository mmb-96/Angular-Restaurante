import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [ LoginComponent, RegistroComponent ],
  imports: [ CommonModule ],
  exports: [ LoginComponent, RegistroComponent ]
})
export class LoginRegistroModule { }
