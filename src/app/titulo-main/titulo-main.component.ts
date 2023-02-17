import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-titulo-main',
  templateUrl: './titulo-main.component.html',
  styleUrls: ['./titulo-main.component.css','./iconos.css']
})
export class TituloMainComponent {
  
  constructor(private datosPortfolio:PortfolioService) {}
  miPortfolio:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.miPortfolio=data;
    });
  }

}
