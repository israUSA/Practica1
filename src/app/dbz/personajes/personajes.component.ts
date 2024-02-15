import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = []

  constructor(private personajesService: PersonajesService){}

  get personajes(){
    return this.personajesService.personajes;
  }
}
