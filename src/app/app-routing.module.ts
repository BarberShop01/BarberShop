import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './cadaster/cadastro.page';
const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroPage },
  { path: 'esqueci-senha', loadChildren: () => import('./Esqueceu-senha/esqueceu-senha.module').then(m => m.EsqueciSenhaPageModule) },  // Rota para a tela de "Esqueci a senha"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
