import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Destinos } from './Destinos';


const url = 'https://60d506ac943aa600177687ad.mockapi.io/api/Destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinosDataService {

  constructor(private http: HttpClient) { }
/**
 * Consumimos la api 
 */
  public getAll(): Observable<Destinos[]> {

  return this.http.get<Destinos[]>(url)
  .pipe(
    tap((destinos: Destinos[]) => destinos.forEach(destinos => destinos.cantidad = 0))
    );
  }
  
}
