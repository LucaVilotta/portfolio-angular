import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }
  
  serverProyectos="http://localhost:8080/proyecto/traer"

  obtenerDatosProyectos():Observable<any>{
    return this.http.get(this.serverProyectos)
  }
}
