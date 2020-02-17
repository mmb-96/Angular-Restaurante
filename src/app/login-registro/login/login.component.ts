import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicio/login.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variable que se utiliza en caso de error.
  private error = 'Los datos son incorrectos o no existe el usuario';

  constructor(private  authService: LoginService, private router: Router, private fb: FormBuilder) {  }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }

  /*
  Metodo para logear el usuario, que lo devuelve a la pagina principal en caso de que el usuario exista, en caso contrario manda
  un mensaje de error.
  */
  public onSubmitLogin() {
    this.authService.login( this.loginForm.value.email, this.loginForm.value.password )
    .then(res => this.router.navigate(['registro'])).catch(err => alert(this.error));
  }

}
