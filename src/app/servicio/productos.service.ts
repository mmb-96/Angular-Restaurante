import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private db: AngularFirestore) { }

  /*
  Metodo que trae todos los bebidas de la base de datos.
  */
 getBebidas() {
  return this.db.collection('Bebidas').snapshotChanges();
  }
}
