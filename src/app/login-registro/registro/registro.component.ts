import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicio/login.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Variable que se utiliza en caso de error.
  private error = 'Correo electrónico registrado, contraseña no válida o falta rellenar algun campo.';

  constructor(private  authService: LoginService, private router: Router, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    local: ['', Validators.required],
    codpos: ['', Validators.required],
    Direccion: ['', Validators.required]
  });

  ngOnInit() {
  }

  // Metodo que se utiliza para registrar el usuario en la base de datos, si funciona se envia a la pagina principal,
  // en caso contrario se muestra un error.
  onSubmitRegister() {

    this.authService.register(this.loginForm.value.email, this.loginForm.value.password).then(auth => this.router.navigate(['/login']))
    .catch(err => alert(this.error));
  }

}
