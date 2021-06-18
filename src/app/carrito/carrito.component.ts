import { Component, OnInit } from '@angular/core';
import { CarritoProduct } from './carrito.interface';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount', 'price', 'totalPrice'];
  productosCarrito: CarritoProduct[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.productosCarrito = this.carritoService.productosCarrito;
    this.carritoService.productoObservable.subscribe(response => {
      this.productosCarrito = response;
    });
  }

  getTotal(){
    var sum: number =0;
    for(let i =0; i < this.productosCarrito.length; i++){
      sum += (this.productosCarrito[i].cantidad * +this.productosCarrito[i].producto.precio);
    }
    return sum
  }
}
