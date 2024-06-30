import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {

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
