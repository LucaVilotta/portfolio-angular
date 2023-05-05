import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';


import { AppComponent } from './app.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TituloMainComponent } from './titulo-main/titulo-main.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './servicios/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    TituloMainComponent,
    ProyectosComponent,
    HabilidadesComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModuleTsModule,
    FormsModule,

  ],
  providers: [PortfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
