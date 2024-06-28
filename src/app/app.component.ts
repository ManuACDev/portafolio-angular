import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/header/header.component';
import { SobremiComponent } from "./components/sobremi/sobremi.component";
import { TecnologiasComponent } from "./components/tecnologias/tecnologias.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, SobremiComponent, TecnologiasComponent, ExperienciaComponent, ProyectosComponent]
})
export class AppComponent {  
 
}
