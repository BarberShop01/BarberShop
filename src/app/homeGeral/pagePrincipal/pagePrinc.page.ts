import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.serrvices';  // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-page-princ',
  templateUrl: './pagePrinc.page.html',
  styleUrls: ['./pagePrinc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PagePrincPage {
  mostrarPopUp = false;
  mostrarPopUpPerfil = false;
  imagemPerfil = 'assets/img/default-profile.png';

  constructor(private router: Router, private apiService: ApiService) {}

  ionViewWillEnter() {
    const email = localStorage.getItem('emailLogado');
    if (email) {
      this.apiService.getProfileImage(email).subscribe((url: string) => {
        this.imagemPerfil = url;
      });
    }
  }

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
    this.apiService.logout().subscribe(); // opcional
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  irParaEditP() {
    this.mostrarPopUpPerfil = false;
    this.router.navigate(['/pagePrincipal/editarPerfil']);
  }
}
