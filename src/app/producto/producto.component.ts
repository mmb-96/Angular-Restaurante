import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public bebidasGet: any = [];
  public combinadoGet: any = [];
  public durumGet: any = [];
  public pitaGet: any = [];
  public ensaladaGet: any = [];
  public pizzaGet: any = [];

  constructor( private ProductosService: ProductosService ) { }

  ngOnInit() {
    this.ProductosService.getBebidas().subscribe(res => this.bebidasGet = res);
    this.ProductosService.getCombinado().subscribe(res => this.combinadoGet = res);
    this.ProductosService.getDürüm().subscribe(res => this.durumGet = res);
    this.ProductosService.getPita().subscribe(res => this.pitaGet = res);
    this.ProductosService.getEnsalada().subscribe(res => this.ensaladaGet = res);
    this.ProductosService.getPizza().subscribe(res => this.pizzaGet = res);
  }

}
