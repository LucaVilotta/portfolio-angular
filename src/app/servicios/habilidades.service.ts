import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http:HttpClient) { }

  serverHabilidades = "http://localhost:3000/habilidades";

  obtenerDatosHabilidades():Observable<any>{
    return this.http.get(this.serverHabilidades)
  }
}
