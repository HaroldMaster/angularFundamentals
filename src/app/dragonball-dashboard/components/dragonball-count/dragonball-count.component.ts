import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dragonball-count',
  templateUrl: './dragonball-count.component.html',
  styleUrls: ['./dragonball-count.component.scss']
})
export class DragonballCountComponent implements OnInit {

  @Input()
  numeroPersonajes: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


}
