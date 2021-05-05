import { Component, OnInit } from '@angular/core';
import  {personaje} from '../models/dragonball.model';
import {DragonballDashboardService} from '../dragonball-dashboard.service'
@Component({
  selector: 'app-dragonball-characters',
  templateUrl: './dragonball-dashboard.component.html',
  styleUrls: ['./dragonball-dashboard.component.scss']
})
export class DragonballDashboardComponent implements OnInit {
  prueba: any;
  constructor(private dragonballService : DragonballDashboardService) { }

  ngOnInit(): void {
    this.dragonballService.getCharacters().subscribe(data =>    console.log('data', data));
 
  }
  personas : personaje[] = [
    {nombre: 'Goku',
    raza: 'Sayajin',
    niveldePoder: 10000
    },
    {nombre: 'Chaoz',
    raza: 'Humano',
    niveldePoder: 300
    }
    ,
    {nombre: 'Freezer',
    raza: 'Extraterrestre',
    niveldePoder: 5000
    }
  ];

  obtenerPoder(event:any){
    this.personas = this.personas.map(p => {
      if(p.nombre === event[1].nombre){
        event[1].niveldePoder = event[0];
        p = Object.assign({},p, event[1]);
      }
      return p;
    })
  }
  eliminarPersonaje(event:any){
    this.personas = this.personas.filter(p => {
      return p.nombre != event.nombre;
    })
  }

}
