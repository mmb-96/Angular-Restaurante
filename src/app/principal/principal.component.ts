import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  // Variable donde guardar los datos para la pagina principal.
  public variadoGet: any = [];

  constructor(private producServi: ProductosService) { }

  /*
  Metodo que cuando inicia la pagina carga la variable, para luego poder mostrar por pantalla los datos.
  */
  ngOnInit() {
    this.producServi.getVariado().subscribe(res => this.variadoGet = res);
  }

}
