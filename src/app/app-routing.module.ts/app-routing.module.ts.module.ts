import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
const routes: Routes = [
  {path:"portfolio", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
];  



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleTsModule { }
