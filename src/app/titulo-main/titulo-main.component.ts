import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { persona } from '../model/persona.model';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-titulo-main',
  templateUrl: './titulo-main.component.html',
  styleUrls: ['./titulo-main.component.css','./iconos.css']
})
export class TituloMainComponent {
  isLogged =  false;

  persona: persona = new persona("","","","","");
  constructor(private datosPortfolio:PortfolioService, private router:Router, private tokenService: TokenService) {}
  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.persona=data;
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(["/login"]);
  }

}
