import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = 'soma'; 
  resultado: number | string = '';

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.soma();
        break;
      case 'subtracao':
        this.resultado = this.subtracao();
        break;
      case 'multiplicacao':
        this.resultado = this.multiplicacao();
        break;
      case 'divisao':
        this.resultado = this.divisao();
        break;
      default:
        this.resultado = 'Operação inválida';
    }
  }

  soma() {
    return this.numero1 + this.numero2;
  }

  subtracao() {
    return this.numero1 - this.numero2;
  }

  multiplicacao() {
    return this.numero1 * this.numero2;
  }

  divisao() {
    return this.numero2 !== 0 ? this.numero1 / this.numero2 : 'Erro: Divisão por zero';
  }
}
