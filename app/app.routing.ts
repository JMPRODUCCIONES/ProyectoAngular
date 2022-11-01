import { ModuleWithProviders, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CursosComponent } from './cursos/cursos.component';
import { NuestraVisionComponent } from './nuestra-vision/nuestra-vision.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';


const appRoutes : Routes = [

  {path: "", component : HomeComponent}, 
  {path: "Home", component : HomeComponent},
  {path: "Cursos", component : CursosComponent},
  {path: "Nuestra_vision", component : NuestraVisionComponent},
  {path: "Tips", component : TipsComponent},
  {path: "Contacto", component : ContactoComponent},
  {path: "Registro", component : RegistroComponent},

 
  
]

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);
