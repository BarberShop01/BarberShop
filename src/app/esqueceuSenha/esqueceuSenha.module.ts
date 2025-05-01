import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { esqueceuPageRoutingPage } from './esqueceuSenha-routinh.module';
import { NgModule } from '@angular/core';
import { EsqueceuSenhaPage } from './esqueceuSenha.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    esqueceuPageRoutingPage
  ],
  declarations: [EsqueceuSenhaPage]
})
export class EsqueceuSenhaModule {}
