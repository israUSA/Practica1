import { Injectable } from '@angular/core';
import { Personaje } from './interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  private _personajes: Personaje[] = [
    { nombre: 'Gohan', poder: 11000 },
    { nombre: 'Yamcha', poder: 0 },
  ];

  obtenerListaGuerreros(): Personaje[]{
    return this._personajes;
  }

  get personajes():Personaje[]{
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje):void{
    this._personajes.push(personaje);  
  }


}
