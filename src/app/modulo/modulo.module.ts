import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloRoutingModule } from './modulo-routing.module';
import { AppComponent } from '../app.component';
import { DestinosListComponent } from '../destinos-list/destinos-list.component';
import { AboutComponent } from '../about/about.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModuloRoutingModule
  ]
})
export class ModuloModule { }
