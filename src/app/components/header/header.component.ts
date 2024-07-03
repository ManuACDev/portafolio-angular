import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Propiedad para rastrear el estado del scroll
  isScrolled = false;

  // Escucha el evento de scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica si el scroll es mayor que 50px
    this.isScrolled = window.pageYOffset > 50;
  }

}
