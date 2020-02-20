import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicio/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reser-pass',
  templateUrl: './reser-pass.component.html',
  styleUrls: ['./reser-pass.component.css']
})
export class ReserPassComponent implements OnInit {

  // Variable que se utiliza en caso de error.
   private error = 'Los datos no son correctos.';

  // Comprobar validaciones.
  loginForm = this.fb.group({
    email: ['', Validators.required],
  });

  constructor(private  authService: LoginService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  /*
  Metodo que llama al servicio para restablecer el correo, es necesario el correo.
  */
  enviarPass() {
    this.authService.sendPasswordResetEmail(this.loginForm.value.email)
    .then(res => this.router.navigate(['login'])).catch(err => alert(this.error));
  }

}
