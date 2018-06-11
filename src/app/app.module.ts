import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstagiariosComponent } from './estagiarios/estagiarios.component';
import { OrientadoresComponent } from './orientadores/orientadores.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

@NgModule({
  declarations: [
    AppComponent,
    EstagiariosComponent,
    OrientadoresComponent,
    ConsultasComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
