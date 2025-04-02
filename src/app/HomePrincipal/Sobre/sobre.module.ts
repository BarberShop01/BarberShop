import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { sobrePageRoutingModule } from './sobre-routing.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    sobrePageRoutingModule
  ],
})

export class sobreModule {}
