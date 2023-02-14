import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css','./iconos.css']
})
export class SobreMiComponent {

  constructor(private datosPortfolio:PortfolioService) {}
  miPortfolio:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.miPortfolio=data;
    });
  }

}
