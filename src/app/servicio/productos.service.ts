import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private db: AngularFirestore) { }

  /*
  Metodos que traen todos los productos de sus respectivos documentos de la base de datos.
  */
 getBebidas() {
  return this.db.collection('Bebidas').snapshotChanges();
  }

 getCombinado() {
  return this.db.collection('Combinado').snapshotChanges();
  }

 getDürüm() {
  return this.db.collection('Dürüm').snapshotChanges();
  }

 getEnsalada() {
  return this.db.collection('Ensalada').snapshotChanges();
  }

 getPita() {
  return this.db.collection('Pita').snapshotChanges();
  }

  getPizza() {
    return this.db.collection('Pizza').snapshotChanges();
  }

  getVariado() {
    return this.db.collection('Variado').snapshotChanges();
  }
}
