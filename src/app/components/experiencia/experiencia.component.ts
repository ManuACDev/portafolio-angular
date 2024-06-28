import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  experiencias = [
    {
      puesto: 'Desarrollador Front-End',
      empresa: 'Tech Solutions',
      fecha: 'Enero 2022 - Presente',
      tareas: [
        'Desarrollo y mantenimiento de interfaces de usuario',
        'Colaboración en proyectos de software ágil',
        'Implementación de pruebas unitarias y de integración'
      ]
    },
    // Puedes añadir más experiencias laborales aquí
  ];

}
