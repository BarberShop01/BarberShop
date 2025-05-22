import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarcPage } from './marc.page';

const routes: Routes = [
  {
    path: '',
    component: MarcPage
  }
];

@NgModule({
  declarations: [MarcPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class MarcPageModule {}
