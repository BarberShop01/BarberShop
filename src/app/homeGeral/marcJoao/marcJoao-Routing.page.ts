import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcJoaoPage } from './marcJoao.page';

const routes: Routes = [
  {
    path: '',
    component: MarcJoaoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class marcPageRoutingModule {}
