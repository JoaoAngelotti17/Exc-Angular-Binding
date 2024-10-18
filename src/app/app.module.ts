import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';  // Importando o novo componente de apólice

// Definindo as rotas
const routes: Routes = [
  { path: '', component: MenuInicialComponent },  // Página inicial será o menu
  { path: 'media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'cadastro-aluno', component: CadastroAlunoComponent },
  { path: 'apolice-seguro', component: ApoliceSeguroComponent },  // Nova rota para o formulário de apólice
  { path: '**', redirectTo: '' }  // Rota coringa redireciona para o menu
];

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    MenuInicialComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent  // Declarando o componente de apólice
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)  // Configurando o RouterModule com as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
