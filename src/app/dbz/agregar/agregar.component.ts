import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  constructor(private personajesService:PersonajesService){}

  // @Output() nuevoEmitter:EventEmitter<Personaje> = new EventEmitter<Personaje>();
  @Input() nuevo:Personaje = {
    nombre:'',
    poder: 0,
  }

  agregar() {
    // this.nuevoEmitter.emit(this.nuevo);
    this.personajesService.agregarPersonaje(this.nuevo);
    this.limpiar();
  }

  limpiar(){
    this.nuevo = {
      nombre:'',
      poder: 0,
    }
  }

}
