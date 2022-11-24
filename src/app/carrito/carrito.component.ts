import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Destinos } from '../Destinos';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
    reservasList$: Observable<Destinos[]>;

  constructor(private reserva: ReservasService){
    this.reservasList$ = reserva.reservasList.asObservable();
  }


  ngOnInit(): void {
    
  }
}
