import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  mediaFinal: number = 0;
  resultado: string = '';

  calcularMedia() {
    const pesos = { ac1: 0.15, ac2: 0.30, ag: 0.10, af: 0.45 };  // Pesos organizados em um objeto

    this.mediaFinal = this.calcularComPesos(pesos);
    this.resultado = this.mediaFinal >= 5 ? 'Aprovado' : 'Reprovado';  // Operador ternário para definir o resultado
  }

  calcularComPesos(pesos: { ac1: number, ac2: number, ag: number, af: number }): number {
    // Função auxiliar para cálculo da média
    return (this.ac1 * pesos.ac1) + (this.ac2 * pesos.ac2) + (this.ag * pesos.ag) + (this.af * pesos.af);
  }
}
