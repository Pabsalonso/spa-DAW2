# Spa - Diseño de Aplicaciones Web II

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Descripción

Este proyecto consiste en una aplicación construida en angular, haciendo uso de elementos de ionic y angular material, que simula ser la aplicación de un restaurante de hamburguesas llamado Teleburguer. La aplicación esta construida como `single page aplication`, y cuenta con una página principal, con una descripción corta del restaurante,una página de carta, en la que el cliente podrá ver la carta y añadir y retirar platos al pedido y una de carrito, donde el cliente podrá ver los elementos de la carta que ha añadido a su pedido para comprar, junto con la cantidad y precio total. 

## Funcionalidades Técnicas

Como ya se ha mencionado antes, el sitio web está construido como SPA, de manera que a ojos del usuario, se podrá navegar por la aplicación de manera que ésta no tenga que realizar ninguna carga. Esto es posible gracias al enrutamiento entre componentes que nos proporciona angular. Además, hacemos uso de componentes lejanos para manejar todo lo relacionado con el carrito. Este carrito está declarado en el servicio del carrito, y los componentes de la vista del carrito y de la carta se suscriben a él para poder verlo y modificarlo. Los datos de los que se recoje la información de la carta están guardados en un fichero Json.
