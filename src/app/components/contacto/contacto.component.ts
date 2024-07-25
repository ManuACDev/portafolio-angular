import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { CommonModule } from '@angular/common';
import { Contacto } from '../../models/contacto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  contacto$!: Observable<Contacto>;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.contacto$ = this.getUserInfo<Contacto>('Contacto');
  }

  getUserInfo<T>(docId: string): Observable<T> {
    const collectionPath = 'Usuario';
    return this.firestoreService.getDocumentById<T>(collectionPath, docId);
  }

  copyToClipboard(email: string) {
    navigator.clipboard.writeText(email).then(() => {
      const confirmation = document.getElementById('copy-confirmation-two');
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
