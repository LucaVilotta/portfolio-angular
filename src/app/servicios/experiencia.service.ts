import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  serverExperiencia = "http://localhost:8080/experiencia/traer";

  obtenerDatosExperiencia():Observable<any>{
    return this.http.get(this.serverExperiencia)
  }
}
