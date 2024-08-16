import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorComponent } from './components/selector/selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proycto007';

  @ViewChild('selector') selector!: SelectorComponent;
  decrementar(){
    this.selector.decrementar;
  }

  incrementar(){
    this.selector.incrementar;
  }
}
