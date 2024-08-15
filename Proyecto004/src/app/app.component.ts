import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './components/dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto004';

  valorUno!: number;
  valorDos!: number;
  valorTres!: number;
  resultado: string = '';

  tirar(){
    this.valorUno = this.obtenerNumero();
    this.valorDos = this.obtenerNumero();
    this.valorTres = this.obtenerNumero();

    if(this.valorUno == this.valorDos && this.valorDos == this.valorTres){
    this.resultado = 'Tres dados iguales! GANO';
    }else {
    this.resultado = 'Todos los dados distintos!';
    }
  }

  obtenerNumero(){
    return Math.floor(Math.random() * 6) + 1; // Devuelve un número aleatorio entre 1 y 6
  }
}
