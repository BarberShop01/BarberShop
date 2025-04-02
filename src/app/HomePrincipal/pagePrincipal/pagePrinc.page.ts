import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-princ',
  templateUrl: './pagePrinc.page.html',
  styleUrls: ['./pagePrinc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class pagePrincPage {

  mostrarPopUp = false;

  constructor() {}

  abrirPopUp() {
    this.mostrarPopUp = true;
  }

  fecharPopUp() {
    this.mostrarPopUp = false;
  }

}
