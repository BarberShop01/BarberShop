import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { barbPageRoutingModule } from "./barb-routing.module";
import { barbPage } from "./barb.page";

@NgModule({
  declarations:[barbPage],
  imports:[
    CommonModule,
    IonicModule,
    barbPageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class barbPageModule {}
