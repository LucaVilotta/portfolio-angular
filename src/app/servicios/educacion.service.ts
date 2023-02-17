import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) { }

  serverEducacion = "http://localhost:3000/eduacion";

  obtenerDatosEducacion():Observable<any>{
    return this.http.get(this.serverEducacion)
  }
}
