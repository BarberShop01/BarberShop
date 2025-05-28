import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { editProutingModule } from "./editP-routing.module";
import { importProvidersFrom } from "@angular/core";
import { EditpPage } from "./editP.page"; // Importação direta do componente standalone

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    editProutingModule
  ],
  providers: [
    importProvidersFrom(EditpPage) // Importando o componente standalone corretamente
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class editPModule {}
