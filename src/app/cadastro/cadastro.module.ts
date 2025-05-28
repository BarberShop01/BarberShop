import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { cadastroRoutingPage } from "./cadastro-routing.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
imports:[
  IonicModule,
  FormsModule,
  CommonModule,
  cadastroRoutingPage,
  HttpClientModule
]
})
export class CadastroModule {}
