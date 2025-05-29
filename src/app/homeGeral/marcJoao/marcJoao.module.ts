import { NgModule } from '@angular/core';
import { IonicModule, IonIcon } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarcJoaoPage } from './marcJoao.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MarcJoaoPage,
  }
];

@NgModule({
  declarations: [MarcJoaoPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MarcPageModule {}
