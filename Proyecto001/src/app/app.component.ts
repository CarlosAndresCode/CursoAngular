import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto001';

  nombre = 'Carlos Andres Pacheco Fuentes';
  edad = 29;
  email = 'correo@correo.com';
  sueldos = [100,200,300];
  sitio = 'http://www.google.com';
  activo = true;

  articulos = [{
    codigo: 1,
    descripcion: 'naranjas',
    precio: 540
  },{
    codigo: 2,
    descripcion: 'manzanas',
    precio: 900
  },{
    codigo: 3,
    descripcion: 'peras',
    precio: 490
  }];

  contador = 0;

  nombreNuevo = '';

  fijarNombreUno(){
    this.nombreNuevo = 'Carlos';
  }

  fijarNombreDos(){
    this.nombreNuevo = 'Andres';
  }

  esActivo(){
    return this.activo ? 'Trabajador activo' : 'Trabajador Inactivo';
  }

  ultimosTresSueldos(){
    let suma = 0;
    for(let i = 0 ; i < this.sueldos.length; i ++){
      suma += this.sueldos[i];
    }
    return suma;
  }

  generarNumero(){
    return Math.floor(Math.random() * 3) + 1;
  }

  incrementarContador(){
    this.contador++;
  }

  decrementarContador(){
    if(this.contador > 0){
      this.contador--;
    }
  }
}
