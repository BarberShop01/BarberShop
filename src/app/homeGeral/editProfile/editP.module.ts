import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EditpPage } from './editP.page'; // Importando diretamente o componente standalone
import { editProutingModule } from './editP-routing.module';
import { FormsModule } from '@angular/forms'; // Importando FormsModule para usar ngModel

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    editProutingModule,
    FormsModule,
    EditpPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permitir elementos personalizados do Ionic
})
export class EditpModule {}
