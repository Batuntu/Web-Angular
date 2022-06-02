import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './componentes/indice/indice.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    InicioComponent,
    NavbarComponent,
    EncabezadoComponent,
    ForoComponent,
    ComunidadComponent,
    SoporteComponent,
    IniciarSesionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
