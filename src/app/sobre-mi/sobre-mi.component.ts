import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { EducacionService } from '../servicios/educacion.service';
import { ExperienciaService } from '../servicios/experiencia.service';
import { persona } from '../model/persona.model';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css','./iconos.css']
})
export class SobreMiComponent {

  isLogged =  false;

  constructor(private datosPortfolio:PortfolioService, private datosEducacion:EducacionService, private datosExperiencia:ExperienciaService, private router:Router, private tokenService: TokenService) {}
  persona: persona = new persona("","","","","");
  conctactoList:any;
  miEducacion:any;
  miExperiencia:any;


  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.persona=data;
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

onLogOut(): void {
  this.tokenService.logOut();
  window.location.reload();
}

login(){
  this.router.navigate(["/login"]);
}


}
