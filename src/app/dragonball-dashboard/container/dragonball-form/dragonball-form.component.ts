import { Component, OnInit } from '@angular/core';
import { DragonballDashboardService } from '../../dragonball-dashboard.service';

@Component({
  selector: 'app-dragonball-form',
  templateUrl: './dragonball-form.component.html',
  styleUrls: ['./dragonball-form.component.scss']
})
export class DragonballFormComponent implements OnInit {
  personaje: any;
  constructor(private dragonballService : DragonballDashboardService) { }

  
  ngOnInit(): void {
    this.dragonballService.getCharacter(1).subscribe(data => this.personaje = data);
  }

  actualizarPersonaje(evento: any){
    console.log('el evento es', evento)
    this.dragonballService.updateFormCharacter(evento).subscribe(data => console.log('la data del put', data));
  }
}
