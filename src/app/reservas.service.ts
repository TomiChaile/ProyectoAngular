import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Destinos } from './Destinos';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

 private _reservasList: Destinos[] = [];
 reservasList: BehaviorSubject<Destinos[]> = new BehaviorSubject(this._reservasList);

  constructor() { }


  addReserva(destino: Destinos) {
    let item = this._reservasList.find((v1)=>v1.nombre == destino.nombre);
    if(!item){
      this._reservasList.push({... destino});
    } else {
      item.cantidad += destino.cantidad;
    }
    this.reservasList.next(this._reservasList);
  }

}
