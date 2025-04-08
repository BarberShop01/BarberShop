import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { esqueceuPageRoutingPage } from "./esqueceuSenha-routinh.module";
import { NgModule } from "@angular/core";

@NgModule({
  imports:[
    CommonModule,
    IonicModule,
    esqueceuPageRoutingPage
  ]
})
export class esqueceuSenhaModule {}
