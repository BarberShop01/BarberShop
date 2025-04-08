import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sobrePage } from './sobre.page';

const routes: Routes = [
  {
    path: '',
    component: sobrePage ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sobrePageRoutingModule {}
