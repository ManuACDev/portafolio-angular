import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Contacto } from '../../models/contacto.model';
import { Sobremi } from '../../models/sobremi.model';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent implements OnInit {

  contacto$!: Observable<Contacto>;
  sobremi$!: Observable<Sobremi>;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.contacto$ = this.getUserInfo<Contacto>('Contacto');
    this.sobremi$ = this.getUserInfo<Sobremi>('Sobremi');
  }

  getUserInfo<T>(docId: string): Observable<T> {
    const collectionPath = 'Usuario';
    return this.firestoreService.getDocumentById<T>(collectionPath, docId);
  }

  copyToClipboard(email: string) {
    navigator.clipboard.writeText(email).then(() => {
      const confirmation = document.getElementById('copy-confirmation');
      if (confirmation) {
        confirmation.style.display = 'inline';
        setTimeout(() => {
          confirmation.style.display = 'none';
        }, 2000);
      }
    }).catch(err => {
      console.error('Error al intentar copiar al portapapeles: ', err);
    });
  }

}
