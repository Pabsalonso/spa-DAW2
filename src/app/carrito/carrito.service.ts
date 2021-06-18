import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CarritoProduct } from "./carrito.interface";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productosCarrito: CarritoProduct[] = [];
  private productosSubject = new Subject<CarritoProduct[]>();
  productoObservable = this.productosSubject.asObservable();

  constructor() { }


/**
 * Método que se recibe para modificar la variable observable de
 * los productos del carrito.
 */
  enviarCarrito(carritoNuevo: CarritoProduct[]){
    this.productosCarrito = carritoNuevo;
    this.productosSubject.next(this.productosCarrito);
  }

}
