import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proyecto } from '../../models/proyecto.model';
import { FirestoreService } from '../../services/firestore.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getProyectos();
  }

  async getProyectos(): Promise<void> {
    try {
      
      const proyectos = await lastValueFrom(this.firestoreService.getCollection<Proyecto>('Proyectos'));
      this.proyectos = proyectos.sort((a, b) => b.id - a.id);

    } catch (error) {
      console.error('Error al obtener los proyectos: ', error);
    }
  }

}
