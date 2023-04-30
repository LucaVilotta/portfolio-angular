import { Component } from '@angular/core';
import { HabilidadesService } from '../servicios/habilidades.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  constructor(private datosHabilidades:HabilidadesService) {}
  misHabilidades:any;
  ngOnInit() {
    this.datosHabilidades.obtenerDatosHabilidades().subscribe(data => {
      console.log(data)
      this.misHabilidades=data;
  });
  }

}
