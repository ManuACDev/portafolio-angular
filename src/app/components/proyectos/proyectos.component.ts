import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  nombre: string;
  descripcion: string;
  enlaceCodigo: string;
  enlaceDemo: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  listaProyectos: Proyecto[] = [
    {
      nombre: 'Newsletter Sign Up Form',
      descripcion: 'En este proyecto construyo un formulario de registro a un newsletter, acompañado de un mensaje de agradecimiento.',
      enlaceCodigo: 'url-al-codigo',
      enlaceDemo: 'url-a-la-demo'
    },
    {
      nombre: 'Shopping Cart',
      descripcion: 'Shopping Cart tiene la funcionalidad básica de un carrito de compras. Añade items, eliminalos, cambia las tallas e incluso prueba algunos cupones de descuento.',
      enlaceCodigo: 'url-al-codigo',
      enlaceDemo: 'url-a-la-demo'
    }
  ];

}
