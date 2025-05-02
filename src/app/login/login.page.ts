import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IonicModule, AlertController } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ApiService } from "../services/api.serrvices"; // ajuste o caminho se necessário

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  email: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private alertCtrl: AlertController
  ) {}

  irParaEsqueceuSenha() {
    this.router.navigate(['/esqueceuSenha']);
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  async login() {
    if (!this.email || !this.senha) {
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Preencha todos os campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.apiService.loginUsuario(this.email, this.senha).subscribe({
      next: async (res: any) => {
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        this.router.navigate(['/pagePrincipal/home']);
      },
      error: async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Falha no login',
          message: err.error?.message || 'Erro desconhecido.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
