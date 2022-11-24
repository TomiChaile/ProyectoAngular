import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Destinos } from '../Destinos';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.css']
})
export class InputIntComponent {

constructor(){}
  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxStock: EventEmitter<string> = new EventEmitter<string>();

ngOnInit():void{
}



upQuantity (): void {
    if(this.cantidad < this.max){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    }
    else
      this.maxStock.emit("No hay mas Stock");
}

downQuantity(): void {
   if(this.cantidad > 0)
   this.cantidad--;
   this.cantidadChange.emit(this.cantidad);
}

ChangeCantidad(event: { key: any; }): void{
     console.log (event.key);
     this.cantidadChange.emit(this.cantidad);
}
}
