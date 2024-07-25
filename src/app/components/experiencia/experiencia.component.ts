import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../services/firestore.service';
import { Experiencia } from '../../models/experiencia.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  experiencias: Experiencia[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getExperiencias();
  }

  async getExperiencias(): Promise<void> {
    try {
      
      const experiencias = await lastValueFrom(this.firestoreService.getCollection<Experiencia>('Experiencias'));
      this.experiencias = experiencias.sort((a, b) => b.id - a.id);

    } catch (error) {
      console.error('Error al obtener las experiencias: ', error);
    }
  }

}
