import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { EducacionService } from '../servicios/educacion.service';
import { ExperienciaService } from '../servicios/experiencia.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css','./iconos.css']
})
export class SobreMiComponent {

  constructor(private datosPortfolio:PortfolioService, private datosEducacion:EducacionService, private datosExperiencia:ExperienciaService) {}
  miPortfolio:any;
  conctactoList:any;
  miEducacion:any;
  miExperiencia:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.miPortfolio=data;
      this.conctactoList=data.contacto;
    });

    this.datosEducacion.obtenerDatosEducacion().subscribe(data => {
      console.log(data)
      this.miEducacion=data;
  });

    this.datosExperiencia.obtenerDatosExperiencia().subscribe(data => {
      console.log(data)
      this.miExperiencia=data;
  });
}
}
