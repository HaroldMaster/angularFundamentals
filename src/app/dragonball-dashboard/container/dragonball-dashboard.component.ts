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
  constructor(private dragonballService : DragonballDashboardService) { }

  ngOnInit(): void {
      this.dragonballService.getCharacters().subscribe(data => this.personas=data,
        error=> console.log('API NO ENCONTRADA'));
  }
    

  obtenerPoder(event:any){
    this.dragonballService.updateCharacter(event)
    .subscribe((data: any)=>{
      console.log('data',data)
      console.log('event',event)
      this.personas = this.personas.map(p => {
        if(p.nombre === event[1].nombre){
          event[1].niveldePoder = event[0];
          p = Object.assign({},p, event[1]);
        }
        return p;
      })
    })
    
  }
  eliminarPersonaje(event:any){
    this.dragonballService.removeCharacrer(event)
    .subscribe((data:any) => {
      this.personas = this.personas.filter(p => {
        return p.nombre != event.nombre;
      })
    });
    
  }

}
