import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public  afAuth: AngularFireAuth, public  router: Router, private db: AngularFirestore) { }

  /*
  Metodo para registrar se en la aplicación. sus parametros usutilizados son email, contraseña, nombre, localidad, codigo postal y direcion.
  Necesitamos obtener la uid del usuraio registrado y añadirla en la coleccón de usuarios, para que se queden registrado el sitio para el
  envio de comida.
  */
  async register(email: string, password: string, nameV: string, local: string, codpos: string, direccion: string) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.db.collection('usersDir').doc(nameV).set({
      name: nameV,
      emailUser: email,
      dir: direccion,
      localidad: local,
      codpostal: codpos
    });
    this.sendEmailVerification();
  }

  /*
  Metodo para que envia un mensaje de confirmacion por correo.
  */
  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
  }
}
