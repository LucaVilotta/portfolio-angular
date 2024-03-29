import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from "../model/persona.model";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  server = "http://localhost:8080/personas/traer/perfil";

  obtenerDatos():Observable<any>{
    return this.http.get<persona>(this.server)
  }
}
