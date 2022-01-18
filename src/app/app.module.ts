import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import {FormsModule} from "@angular/forms";
import { ResultadoComponent } from './componentes/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
