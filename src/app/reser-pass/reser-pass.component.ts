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

  loginForm = this.fb.group({
    email: ['', Validators.required],
  });

  constructor(private  authService: LoginService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  enviarPass() {
    this.authService.sendPasswordResetEmail(this.loginForm.value.email)
    .then(res => this.router.navigate(['login'])).catch(err => alert(this.error));
  }

}
