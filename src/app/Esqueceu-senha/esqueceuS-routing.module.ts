import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsqueciSenhaPage } from './esqueceu-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciSenhaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsqueciSenhaPageRoutingModule {}
