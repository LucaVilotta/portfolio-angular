import { Component } from '@angular/core';
import { ProyectosService } from '../servicios/proyectos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private datosProyectos:ProyectosService){}
  misProyectos:any;
  ngOnInit(){
    this.datosProyectos.obtenerDatosProyectos().subscribe(data => {
      console.log(data)
      this.misProyectos=data;
  }); 
  }
}
