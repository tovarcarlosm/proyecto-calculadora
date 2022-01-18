import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  mensaje: string = "0";

  mostrarResultado(resultado: string){
    this.mensaje = resultado;
  }
}
