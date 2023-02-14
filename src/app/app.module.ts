import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';

import { AppComponent } from './app.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TituloMainComponent } from './titulo-main/titulo-main.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    TituloMainComponent,
    ProyectosComponent,
    HabilidadesComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModuleTsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
