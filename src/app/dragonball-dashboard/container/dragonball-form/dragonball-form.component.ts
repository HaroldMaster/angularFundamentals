import { Component, OnInit } from '@angular/core';
import { DragonballDashboardService } from '../../dragonball-dashboard.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dragonball-form',
  templateUrl: './dragonball-form.component.html',
  styleUrls: ['./dragonball-form.component.scss']
})
export class DragonballFormComponent implements OnInit {
  personaje: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dragonballService : DragonballDashboardService) { }

  
  ngOnInit(): void {
    //this.dragonballService.getCharacter(1).subscribe(data => this.personaje = data);
    console.log('hola',this.route.snapshot.params.id)
    this.route
    .params
     .pipe(
      switchMap((data: any) =>{
        console.log('la data del switch route', data.id);
       return this.dragonballService.getCharacter(data.id);
      }
       )
    )
    .subscribe((data: any) => {
      this.personaje = data;
      });
    
  }

  actualizarPersonaje(evento: any){
    console.log('el evento es', evento)
    this.dragonballService.updateFormCharacter(evento).subscribe(data => console.log('la data del put', data));
  }
}
