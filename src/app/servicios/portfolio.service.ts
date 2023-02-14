import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  server = "http://localhost:3000"

  obtenerDatos():Observable<any>{
    return this.http.get(this.server+"/info")
  }
}
