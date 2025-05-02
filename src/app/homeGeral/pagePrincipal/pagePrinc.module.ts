import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // necessário para ngClass, *ngIf etc.
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagePrincPage } from './pagePrinc.page';


@NgModule({
  declarations: [PagePrincPage],
  imports: [
    IonicModule,     // necessário para reconhecer os componentes <ion-*>
    CommonModule,    // necessário para ngClass, ngIf, etc.
    FormsModule,
    RouterModule.forChild([{ path: '', component: PagePrincPage }])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagePrincPageModule {}
