import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';


@Component({
  selector: 'app-formulario-dragonball',
  templateUrl: './formulario-dragonball.component.html',
  styleUrls: ['./formulario-dragonball.component.scss']
})
export class FormularioDragonballComponent implements OnInit {
  @Input()
  personaje : any;
  @Output()
  nuevoPersonaje: EventEmitter<any> = new EventEmitter();

  poderes: Array< { [number: string]: string }>=[
    {
      nombre: 'Kamekameha',
      valor: 'KH'
    },
    {
      nombre: 'Genkidama',
      valor: 'GD'
    },
    {
      nombre: 'Otro',
      valor: 'OT'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  anadirAEquipo(event:any){
    console.log(event);
    console.log(this.personaje)
    if(event){
      this.personaje.equipo= "Villano"
    }
    else {
      this.personaje.equipo= "Guerreros Z"
    }
  }
  enviarPersonaje(event:any){
    console.log(event)
    this.nuevoPersonaje.emit(Object.assign({},this.personaje, event));
  }

}
