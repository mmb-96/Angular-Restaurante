import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor(public  afAuth: AngularFireAuth, public  router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  /*
  Metodo que se utiliza para hacer el login de la aplicación.
  */
  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, rejected) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => resolve(user)).catch(err => rejected(err));
    });
  }

  /*
  Metodo que se utiliza para deslogearnos de la aplicación.
  */
  async logout(): Promise<any> {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['registro']);
  }

  /*
  Metodo que se utiliza para restablecer la contrasea del usuario.
  */
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

}
