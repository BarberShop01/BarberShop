import { NgModule } from '@angular/core';
import { IonicModule, IonIcon } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { agendamentoPage } from './agendamento.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: agendamentoPage,
  }
];

@NgModule({
  declarations: [agendamentoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class MarcPageModule {}
