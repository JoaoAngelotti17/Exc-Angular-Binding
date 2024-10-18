import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';

  // Exemplo simples de envio (exibe no console)
  enviarFormulario() {
    const camposPreenchidos = this.ra && this.nome && this.email && this.celular;

    if (camposPreenchidos) {
      this.exibirCadastro();
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  exibirCadastro() {
    console.log('Cadastro de Aluno:', {
      ra: this.ra,
      nome: this.nome,
      email: this.email,
      celular: this.celular
    });
  }
}
