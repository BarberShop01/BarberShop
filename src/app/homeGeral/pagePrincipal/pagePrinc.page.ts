import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-princ',
  templateUrl: './pagePrinc.page.html',
  styleUrls: ['./pagePrinc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class pagePrincPage {

  constructor(private router: Router) {}


  mostrarPopUp: boolean = false;
mostrarPopUpPerfil: boolean = false;

abrirPopUp() {
  this.mostrarPopUp = true;
  this.mostrarPopUpPerfil = false;
}

fecharPopUp() {
  this.mostrarPopUp = false;
}

abrirPopUpPerfil() {
  this.mostrarPopUpPerfil = true;
  this.mostrarPopUp = false;
}

fecharPopUpPerfil() {
  this.mostrarPopUpPerfil = false;
}

  logout() {
    console.log('Usuário deslogado!');
    this.mostrarPopUpPerfil = false;
    this.router.navigate(['/login']);
  }

  irParaEditP() {
    this.mostrarPopUpPerfil = false;
    this.router.navigate(['/pagePrincipal/editarPerfil']);
  }


}

