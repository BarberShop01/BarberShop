import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceuSenha.page.html',
  styleUrls: ['./esqueceuSenha.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EsqueceuSenhaPage {
  email: string = '';

  constructor(
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  voltarParaLogin() {
    this.router.navigate(['/login']);
  }

  cancelar() {
    this.router.navigate(['/login']);
  }

  async enviarReset() {
    if (!this.email) {
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Por favor, insira um e-mail válido.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const alert = await this.alertCtrl.create({
      header: 'Enviado',
      message: `Link de redefinição de senha enviado para ${this.email}.`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
