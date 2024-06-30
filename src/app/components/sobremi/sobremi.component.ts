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
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  
    const confirmation = document.getElementById('copy-confirmation');
    if (confirmation) {
      confirmation.style.display = 'inline';
      setTimeout(() => {
        confirmation.style.display = 'none';
      }, 2000);
    }
  }

}
