import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { agendamentoPage } from './agendamento.page';

const routes: Routes = [
  {
    path: '',
    component: agendamentoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class marcPageRoutingModule {}
