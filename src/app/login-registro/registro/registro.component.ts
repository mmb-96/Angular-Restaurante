import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../servicio/registro.service';
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

  constructor(private  authService: RegistroService, private router: Router, private fb: FormBuilder) { }

  // Comprobar validaciones.
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    nameV: ['', Validators.required],
    local: ['', Validators.required],
    codpos: ['', Validators.required],
    direccion: ['', Validators.required]
  });

  ngOnInit() {
  }

  // Metodo que se utiliza para registrar el usuario en la base de datos, si funciona se envia a la pagina de logeo,
  // en caso contrario se muestra un error.
  onSubmitRegister() {

    this.authService.register(this.loginForm.value.email,
      this.loginForm.value.password,
      this.loginForm.value.nameV,
      this.loginForm.value.local,
      this.loginForm.value.codpos,
      this.loginForm.value.direccion).then(auth => this.router.navigate(['/login']))
    .catch(err => alert(this.error));
  }

}
