import { Component, OnInit } from '@angular/core';
import { Formacion } from '../../models/formacion.model';
import { FirestoreService } from '../../services/firestore.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent implements OnInit {

  formaciones: Formacion[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getFormacion();
  }

  async getFormacion(): Promise<void> {
    try {
      
      const formaciones = await lastValueFrom(this.firestoreService.getCollection<Formacion>('Formaciones'));
      this.formaciones = formaciones.sort((a, b) => b.id - a.id);

    } catch (error) {
      console.error('Error al obtener las formaciones: ', error);
    }
  }

}
