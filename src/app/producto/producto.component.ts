import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public bebidasGet: any = [];

  constructor( private ProductosService: ProductosService, ) { }

  ngOnInit() {
    this.ProductosService.getBebidas().subscribe(chats => this.bebidasGet = chats);
    this.ProductosService.getBebidas().subscribe(chats => this.chatRooms = chats);
    this.ProductosService.getBebidas().subscribe(chats => this.chatRooms = chats);
    this.ProductosService.getBebidas().subscribe(chats => this.chatRooms = chats);
    this.ProductosService.getBebidas().subscribe(chats => this.chatRooms = chats);
  }

}
