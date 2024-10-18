import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  nomeSegurado: string = '';
  sexo: string = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number | null = null;

  // Método para calcular o valor da apólice
  calcularApolice() {
    if (this.dadosPreenchidos()) {
      this.valorApolice = this.calcularValorApolice();
    } else {
      this.valorApolice = null;
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  dadosPreenchidos(): boolean {
    return this.sexo !== '' && this.idade !== null && this.valorAutomovel !== null;
  }

  calcularValorApolice(): number | null {
    if (this.sexo === 'masculino') {
      return this.idade! <= 25 ? this.valorAutomovel! * 0.15 : this.valorAutomovel! * 0.10;
    } else if (this.sexo === 'feminino') {
      return this.valorAutomovel! * 0.08;
    }
    return null;
  }
}
