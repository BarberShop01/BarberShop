import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  constructor(private router: Router) {}

  irParaEsqueciSenha() {
    this.router.navigate(['/esqueci-senha']);
  }

    irParaRegisterUser() {
      this.router.navigate(['/registerUser'])
    }

}
