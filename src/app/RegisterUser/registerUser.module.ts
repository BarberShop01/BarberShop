import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RegisterUserModuleRounting } from './registerUser-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({

  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    RegisterUserModuleRounting
  ]
})
export class RegisterUserModule {}
