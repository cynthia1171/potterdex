import { Component } from '@angular/core';
import { PeopleService } from './personajes.service';
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-potter',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [PeopleService]
})

export class PersonajesComponent {
  public data: Array<any>;
  public name: string;
  public personaje;

  constructor(
    private peopleService: PeopleService
    ) {}

  ngOnInit(){
    this.getPersonajes();
  }

  getPersonajes(){
    this.peopleService.getPeople().subscribe(data => {
      this.data = data;
    });
  }

  mostrarInfo(id){
    this.personaje = {
      actor : this.data[id].actor,
      alive: this.data[id].alive,
      ancestry: this.data[id].ancestry,
      dateOfBirth: this.data[id].dateOfBirth,
      eyeColour: this.data[id].eyeColour,
      gender: this.data[id].gender,
      hairColour: this.data[id].hairColour,
      hogwartsStaff: this.data[id].hogwartsStaff,
      hogwartsStudent: this.data[id].hogwartsStudent,
      house: this.data[id].house,
      image: this.data[id].image,
      name: this.data[id].name,
      patronus: this.data[id].patronus,
      species: this.data[id].species
    }
  }
}
