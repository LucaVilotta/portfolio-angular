import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) { }

  serverEducacion = "http://localhost:8080/educacion/traer";

  obtenerDatosEducacion():Observable<any>{
    return this.http.get(this.serverEducacion)
  }
}
