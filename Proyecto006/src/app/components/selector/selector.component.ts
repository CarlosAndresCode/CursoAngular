import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {

  numero: number = 0;
  decrementar(){
    this.numero --;
  }

  incrementar(){
    this.numero++;
  }
}
