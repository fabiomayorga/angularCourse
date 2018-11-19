import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes creados por mi
import { TiendaComponent } from './components/tienda/tienda.component'
import { ParquesComponent } from './components/parques/parques.component'

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent, //es necesario ponerlo aqui para hacer uso de el en TODA la aplicacion
    ParquesComponent
  ],
  imports: [ //MOdulos o componentes internos de angular necesarios para cargar en el modulo y usarlo luego
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //servicios globales para toda la app
  bootstrap: [AppComponent] //componente inicialque lanza la app
})
export class AppModule { }
