import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { homePageRoutings } from './home-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    homePageRoutings,
    ExploreContainerComponentModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Mantido caso você tenha componentes personalizados
})
export class homeModule {} // Alterei para HomeModule para seguir a convenção de nomenclatura
