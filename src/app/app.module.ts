import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DragonballDashboardModule} from '../app/dragonball-dashboard/dragonball-dashboard.module'
import {RouterModule} from '@angular/router'
import { DragonballCountComponent } from './dragonball-dashboard/components/dragonball-count/dragonball-count.component';
import { HomeComponent } from './home.component';
import { DragonballFormComponent } from './dragonball-dashboard/container/dragonball-form/dragonball-form.component';
import { DragonballDashboardComponent } from './dragonball-dashboard/container/dragonball-dashboard.component';

const rutas =[
    { path: '', component: HomeComponent, pathMatch: 'full' },
   // { path: 'personaje', component: DragonballFormComponent },
    { path: 'personajes', component: DragonballDashboardComponent },
] 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragonballDashboardModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
