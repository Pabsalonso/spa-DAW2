import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CartaComponent } from "./carta/carta.component";
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carta', component: CartaComponent},
  {path: 'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
