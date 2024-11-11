import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimerComponenteComponent,SegundoComponenteComponent,TercerComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolacion';
}
