import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragonballDashboardComponent } from './container/dragonball-dashboard.component';
import {DragonballCountComponent} from './components/dragonball-count/dragonball-count.component';
import {DragonballDetailsComponent} from './components/dragonball-details/dragonball-details.component'
import {DragonballDashboardService} from './dragonball-dashboard.service'
import {HttpClientModule} from  '@angular/common/http';
import { DragonballFormComponent } from './container/dragonball-form/dragonball-form.component'
import {FormsModule} from '@angular/forms';
import { FormularioDragonballComponent } from './components/formulario-dragonball/formulario-dragonball.component'
import {RouterModule, Routes} from '@angular/router'
const routes: Routes = [
    {
      path: 'personaje',
      children: [
       { path: '', component: DragonballFormComponent },
       { path: ':id', component: DragonballFormComponent }
      ]
    }
  ]; 
@NgModule({
  declarations: [
    DragonballDashboardComponent,
    DragonballCountComponent,
    DragonballDetailsComponent,
    DragonballFormComponent,
    FormularioDragonballComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DragonballDashboardService
  ],
  exports: [
    DragonballDashboardComponent,
    DragonballFormComponent
  ]
  
})
export class DragonballDashboardModule { 
}
