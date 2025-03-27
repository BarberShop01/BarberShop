import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './cadaster/cadastro.page';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroPage },
  { path: 'esqueci-senha', loadChildren: () => import('./Esqueceu-senha/esqueceu-senha.module').then(m => m.EsqueciSenhaPageModule) },
  {
    path: 'registerUser', loadChildren: () => import('./RegisterUser/registerUser.module').then(m => m.RegisterUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
