import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajesService } from '../personajes.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {

  constructor(private personajesService: PersonajesService){}

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000,
  };  
}
