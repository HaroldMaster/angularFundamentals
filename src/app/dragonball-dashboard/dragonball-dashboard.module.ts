import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragonballDashboardComponent } from './container/dragonball-dashboard.component';
import {DragonballCountComponent} from './components/dragonball-count/dragonball-count.component';
import {DragonballDetailsComponent} from './components/dragonball-details/dragonball-details.component'
import {DragonballDashboardService} from './dragonball-dashboard.service'
import {HttpClientModule} from  '@angular/common/http'

@NgModule({
  declarations: [
    DragonballDashboardComponent,
    DragonballCountComponent,
    DragonballDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DragonballDashboardService
  ],
  exports: [
    DragonballDashboardComponent
  ]
  
})
export class DragonballDashboardModule { 
}
