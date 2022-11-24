import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DestinosListComponent } from './destinos-list/destinos-list.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { ArgaerolineasComponent } from './argaerolineas/argaerolineas.component';
import { AboutComponent } from './about/about.component';
import { ModuloRoutingModule } from './modulo/modulo-routing.module';
import { InputIntComponent } from './input-int/input-int.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinosListComponent,
    CarritoComponent,
    ArgaerolineasComponent,
    AboutComponent,
    InputIntComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
