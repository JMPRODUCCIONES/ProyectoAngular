
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing , appRoutingProviders } from './app.routing';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { NuestraVisionComponent } from './nuestra-vision/nuestra-vision.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    NuestraVisionComponent,
    RegistroComponent,
    ContactoComponent,
    HomeComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
  routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
