import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importando as classes para uso da biblioteca de rotas do angular
//estas rotas serão utilizadas para navegação da SPA - Single Page Application
import { Routes, RouterModule } from '@angular/router';

//importando as classes para uso da biblioteca de formulários do angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importando as classes para uso da biblioteca de acesso à APIs do angular (Http Client)
import { HttpClientModule } from '@angular/common/http';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { ConsultaEmpresasComponent } from './consulta-empresas/consulta-empresas.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ConsultaFuncionariosComponent } from './consulta-funcionarios/consulta-funcionarios.component';

//mapear uma rota (URL) para cada componente do projeto..
const routes : Routes = [
  { path : 'cadastro-empresas', component : CadastroEmpresasComponent },
  { path : 'consulta-empresas', component : ConsultaEmpresasComponent },
  { path : 'cadastro-funcionarios', component : CadastroFuncionariosComponent },
  { path : 'consulta-funcionarios', component : ConsultaFuncionariosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionariosComponent,
    CadastroEmpresasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,     //registrando biblioteca para chamadas de API
    FormsModule,          //registrando biblioteca para formulários
    ReactiveFormsModule,  //registrando biblioteca para formulários   
    RouterModule.forRoot(routes) //registrando a configuração de rotas!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
