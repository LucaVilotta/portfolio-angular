import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { persona } from '../model/persona.model';

@Component({
  selector: 'app-titulo-main',
  templateUrl: './titulo-main.component.html',
  styleUrls: ['./titulo-main.component.css','./iconos.css']
})
export class TituloMainComponent {
  persona: persona = new persona("","","","","");
  constructor(private datosPortfolio:PortfolioService) {}
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.persona=data;
    });
  }

}
