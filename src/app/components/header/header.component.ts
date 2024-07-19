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
  isMenuOpen = false;

  // Escucha el evento de scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica si el scroll es mayor que 50px
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    this.addSmoothScroll();
  }

  addSmoothScroll() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1) || ''; // Default to empty string if null
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
        this.isMenuOpen = false; // Close the menu after clicking a link
      });
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('show-menu', this.isMenuOpen);
    }
  }

}
