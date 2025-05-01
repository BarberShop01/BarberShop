import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-princ',
  templateUrl: './pagePrinc.page.html',
  styleUrls: ['./pagePrinc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PagePrincPage implements OnInit {
  mostrarPopUp: boolean = false;
  mostrarPopUpPerfil: boolean = false;
  imageUrl: string = 'assets/img/profile.png';
  usuario: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const email = localStorage.getItem('emailUsuario');

    if (email) {
      this.http.get<any>(`http://localhost:3000/api/usuario?email=${email}`).subscribe({
        next: (res) => {
          this.usuario = res;

          // Verifica se veio uma imagem e ajusta o path corretamente
          if (res.imagem) {
            this.imageUrl = res.imagem.startsWith('http') ? res.imagem : `http://localhost:3000/${res.imagem}`;
          }
        },
        error: (err) => {
          console.error('Erro ao buscar usuário:', err);
          alert('Erro ao carregar dados do usuário. Tente novamente mais tarde.');
          this.router.navigate(['/login']);
        }
      });
    } else {
      console.warn('E-mail não encontrado no localStorage.');
      this.router.navigate(['/login']);
    }
  }

  // Funções para popups
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

  // Logout
  logout() {
    localStorage.removeItem('emailUsuario');
    console.log('Usuário deslogado!');
    this.mostrarPopUpPerfil = false;
    this.router.navigate(['/login']);
  }

  // Ir para edição de perfil
  irParaEditP() {
    this.mostrarPopUpPerfil = false;
    this.router.navigate(['/pagePrincipal/editarPerfil']);
  }
}
