import { Component, OnInit } from '@angular/core';
import { Producto } from './carta.interface';
import { CarritoService } from '../carrito/carrito.service';
import { CarritoProduct } from '../carrito/carrito.interface';
import Carta from "src/assets/carta.json";

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  productosCarrito: CarritoProduct[] = [];
  carta: Producto[] = []

  constructor(
    private carritoService: CarritoService) {
      for(let i =0; i<Carta.length;i++){
        this.carta[i] = Carta[i];
      }
    }

  ngOnInit(): void {

    this.productosCarrito = this.carritoService.productosCarrito;
    this.carritoService.productoObservable.subscribe(response => {
      this.productosCarrito = response;
    });
  }

  addProducto(toAdd: Producto){
    var temp = this.productosCarrito.find(producto => producto.producto.id === toAdd.id);
    if(temp === undefined){
      this.productosCarrito.push(
        {cantidad: 1,
        producto: toAdd});
    }else{
      temp.cantidad++;
    }
    this.carritoService.enviarCarrito(this.productosCarrito);
  }

  removeProducto(toRemove: Producto){
    var temp = this.productosCarrito.find(producto => producto.producto.id === toRemove.id);
    if(temp !== undefined){
      if(temp.cantidad === 1){
        this.productosCarrito = this.productosCarrito.filter(producto => producto.producto.id !== temp?.producto.id);
      }else{
        temp.cantidad--;
      }
      this.carritoService.enviarCarrito(this.productosCarrito);
    }
  }

  badgeNum(id: string){
    var temp = this.productosCarrito.find(producto => producto.producto.id === id);
    return temp?.cantidad;
  }
}
