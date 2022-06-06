import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { IndiceComponent } from './componentes/indice/indice.component';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { InicioComponent } from './componentes/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    ComunidadComponent,
    EncabezadoComponent,
    ForoComponent,
    IniciarSesionComponent,
    NavbarComponent,
    RegistroComponent,
    SoporteComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
