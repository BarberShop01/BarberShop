import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { barbPage } from './barb.page';

const Routes: Routes = [
  {path:'', component: barbPage}
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [ RouterModule],
})

export class barbPageRoutingModule {}
