import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcPage } from './marc.page';

const routes: Routes = [
  {
    path: '',
    component: MarcPage ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class marcPageRoutingModule {}
