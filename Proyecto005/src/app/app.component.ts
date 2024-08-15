import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CronometroComponent } from './components/cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CronometroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto005';

  mensaje!: string;

  actualizar(t: number){
    this.mensaje = t + '(Se actualiza cada 10 segundos)';
  }
}
