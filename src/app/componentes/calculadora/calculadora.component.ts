import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{

  @Output() resultadoAux = new EventEmitter<string>();

  inputNumeroUno : number = 0;
  inputNumeroDos : number = 0;
  resultado: string = "0";

  sumar(){
    this.resultado = String(this.inputNumeroUno + this.inputNumeroDos);
    this.resultadoAux.emit(this.resultado);
  }

  restar(){
    this.resultado = String(this.inputNumeroUno - this.inputNumeroDos);
    this.resultadoAux.emit(this.resultado);
  }

  multiplicar(){
    this.resultado = String(this.inputNumeroUno * this.inputNumeroDos);
    this.resultadoAux.emit(this.resultado);
  }

  dividir(){
    if (this.inputNumeroDos == 0){
      this.resultado = "El denominador no puede ser 0";
      this.resultadoAux.emit(this.resultado);
    }else{
    this.resultado = String(this.inputNumeroUno / this.inputNumeroDos);
    this.resultadoAux.emit(this.resultado);
    }
  }

  potencia(){
    this.resultado = String(Math.pow(this.inputNumeroUno,this.inputNumeroDos));
    this.resultadoAux.emit(this.resultado);
  }

}

