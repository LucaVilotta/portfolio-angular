import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { EducacionService } from '../servicios/educacion.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css','./iconos.css']
})
export class SobreMiComponent {

  constructor(private datosPortfolio:PortfolioService, private datosEducacion:EducacionService) {}
  miPortfolio:any;
  conctactoList:any;
  miEducacion:any;
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
}
}
