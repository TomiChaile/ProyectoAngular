import { Component, OnInit } from '@angular/core';
import { Destinos } from '../Destinos';
import { DestinosDataService } from '../destinos-data.service';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-destinos-list',
  templateUrl: './destinos-list.component.html',
  styleUrls: ['./destinos-list.component.css']
})
export class DestinosListComponent implements OnInit{

destinos: Destinos[] = [];


constructor (
    private reserva: ReservasService,
    private destinosdataservice: DestinosDataService) { 
}

ngOnInit() : void {
    this.destinosdataservice.getAll().subscribe(destinos => this.destinos = destinos);
}

maxStock(m:string){
    alert(m);
}

addReserva(destino: Destinos): void{
    this.reserva.addReserva(destino);
    destino.stock -= destino.cantidad;
    destino.cantidad = 0;
}
}
