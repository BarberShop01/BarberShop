import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { loginRoutingPage } from "./login-routing.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
   CommonModule,
   FormsModule,
   IonicModule,
   loginRoutingPage,
   HttpClientModule
  ]
})
export class LoginModule {}
