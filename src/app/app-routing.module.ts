import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceComponent } from './componentes/indice/indice.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: '', component:IndiceComponent},
  {path: 'indice', component:IndiceComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'foro', component:ForoComponent},
  {path: 'comunidad', component:ComunidadComponent},
  {path: 'soporte', component:SoporteComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
