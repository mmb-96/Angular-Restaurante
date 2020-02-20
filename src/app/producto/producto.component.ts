import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  // Variables donde se guarda los datos para la pagina de producto.
  public bebidasGet: any = [];
  public combinadoGet: any = [];
  public durumGet: any = [];
  public pitaGet: any = [];
  public ensaladaGet: any = [];
  public pizzaGet: any = [];

  constructor( private producServi: ProductosService ) { }

  /*
  Metodo que cuando inicia la pagina carga la variable, para luego poder mostrar por pantalla los datos.
  */
  ngOnInit() {
    this.producServi.getBebidas().subscribe(res => this.bebidasGet = res);
    this.producServi.getCombinado().subscribe(res => this.combinadoGet = res);
    this.producServi.getDürüm().subscribe(res => this.durumGet = res);
    this.producServi.getPita().subscribe(res => this.pitaGet = res);
    this.producServi.getEnsalada().subscribe(res => this.ensaladaGet = res);
    this.producServi.getPizza().subscribe(res => this.pizzaGet = res);
  }

  // Metodo para añadir los productos al carrito. Se programara en un futuro.
  // Ahora mismo lanza una alerta al usuario.
  anadirProduc() {
    window.alert('Producto añadido al carrito.');
  }

}
