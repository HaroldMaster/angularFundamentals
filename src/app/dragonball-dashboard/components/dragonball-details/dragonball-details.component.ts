import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {personaje} from '../../models/dragonball.model'
@Component({
  selector: 'app-dragonball-details',
  templateUrl: './dragonball-details.component.html',
  styleUrls: ['./dragonball-details.component.scss']
})
export class DragonballDetailsComponent implements OnInit {
  @Input()
  listaPersonajes: Array<personaje> = [];
  @Output()
  nuevoPoder: EventEmitter<any> = new EventEmitter();
  @Output()
  eliminar: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  actualizarPoder(event:any, personaje:any){
    let send = [event,personaje];
    this.nuevoPoder.emit(send);
  }
  eliminarPersonaje(personaje:personaje){
    this.eliminar.emit(personaje);
  }
}
