import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { cadastroRoutingPage } from "./cadastro-routing.module";

@NgModule({
imports:[
  IonicModule,
  FormsModule,
  CommonModule,
  cadastroRoutingPage
]
})
export class cadastroModule {}
