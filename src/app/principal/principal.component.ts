import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public variadoGet: any = [];

  constructor(private ProductosService: ProductosService) { }

  ngOnInit() {
    this.ProductosService.getVariado().subscribe(res => this.variadoGet = res);
  }

}
