import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent implements OnInit {

  contacto: any;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getContacto();
  }

  getContacto(): void {
    
    const collectionPath = 'Usuario';
    const documentId = 'Contacto';

    this.firestoreService.getDocumentById(collectionPath, documentId).subscribe(
      data => {
        this.contacto = data;
        console.log(this.contacto);
      },
      error => {
        console.error('Error fetching document: ', error);
      }
    );
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
