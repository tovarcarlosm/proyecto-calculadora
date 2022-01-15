import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{

  inputNumeroUno : number = 0;
  inputNumeroDos : number = 0;
  resultado: string = "0";

  sumar(){
    this.resultado = String(this.inputNumeroUno + this.inputNumeroDos);
  }
  restar(){
    this.resultado = String(this.inputNumeroUno - this.inputNumeroDos);
  }

  multiplicar(){
    this.resultado = String(this.inputNumeroUno * this.inputNumeroDos);
  }

  dividir(){
    if (this.inputNumeroDos == 0){
      this.resultado = "El denominador no puede ser 0";
    }else{
    this.resultado = String(this.inputNumeroUno / this.inputNumeroDos);
    }
  }

  potencia(){
    this.resultado = String(Math.pow(this.inputNumeroUno,this.inputNumeroDos));
  }

}

