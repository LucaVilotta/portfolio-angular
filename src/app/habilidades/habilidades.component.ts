import { Component } from '@angular/core';
import { HabilidadesService } from '../servicios/habilidades.service';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  isLogged =  false;

  constructor(private datosHabilidades:HabilidadesService, private router:Router, private tokenService: TokenService) {}
  misHabilidades:any;
  ngOnInit() {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.datosHabilidades.obtenerDatosHabilidades().subscribe(data => {
      console.log(data)
      this.misHabilidades=data;
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
