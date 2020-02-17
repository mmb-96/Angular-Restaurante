import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importacion del modulo, tiene el login y el registro.
import { LoginRegistroModule } from './login-registro/login-registro.module';
// Importacion de autentificacion y resto de impor necesarios de Firebase.
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCmPYLIt2ZBZ6bfrBx3O-bCHgEV02OGiA',
  authDomain: 'comida-angular.firebaseapp.com',
  databaseURL: 'https://comida-angular.firebaseio.com',
  projectId: 'comida-angular',
  storageBucket: 'comida-angular.appspot.com',
  messagingSenderId: '549755840895',
  appId: '1:549755840895:web:56aea79517003b6824524a',
  measurementId: 'G-YYT53XX4QH'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRegistroModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // <-----
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
