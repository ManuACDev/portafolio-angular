import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../../models/tecnologia.model';
import { FirestoreService } from '../../services/firestore.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent implements OnInit {

  tecnologias: Tecnologia[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getTecnologias();
  }

  async getTecnologias() {
    try {
      this.tecnologias = await lastValueFrom(this.firestoreService.getCollection<Tecnologia>('Tecnologias'));
      console.log(this.tecnologias);
    } catch (error) {
      console.error('Error al obtener las tecnologías: ', error);
    }
  }

}
