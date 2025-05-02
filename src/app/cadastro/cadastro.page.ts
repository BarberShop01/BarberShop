import { IonicModule, AlertController } from "@ionic/angular";
import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ApiService } from "../services/api.serrvices";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class Cadastro implements AfterViewInit {
  nome = '';
  numero = '';
  cpf = '';
  email = '';
  dataNascimento = '';
  senha = '';
  okSenha = '';
  imagem: File | null = null;
  imagemPreview: string | null = null;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private alertCtrl: AlertController
  ) {}

  ngAfterViewInit() {
    // Métodos de upload de imagem já configurados no HTML
  }

  // Método para lidar com a mudança de imagem
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        this.showAlert('Erro', 'O tamanho da imagem não pode exceder 3MB.');
        return;
      }
      this.imagem = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagemPreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Validação e cadastro
  async cadastrar() {
    if (!this.nome || !this.numero || !this.cpf || !this.email || !this.dataNascimento || !this.senha || !this.okSenha) {
      this.showAlert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    if (this.senha !== this.okSenha) {
      this.showAlert('Erro', 'As senhas não coincidem.');
      return;
    }

    const formData = new FormData();
    formData.append('nome', this.nome);
    formData.append('numero', this.numero);
    formData.append('cpf', this.cpf);
    formData.append('email', this.email);
    formData.append('dataNascimento', this.dataNascimento);
    formData.append('senha', this.senha);
    if (this.imagem) {
      formData.append('imagem', this.imagem);
    }

    this.apiService.cadastrarComImagem(formData).subscribe({
      next: async () => {
        this.showAlert('Sucesso', 'Usuário cadastrado com sucesso!');
        this.router.navigate(['/pagePrincipal/home']);
      },
      error: async (err) => {
        const message = err.error?.message || 'Erro ao cadastrar.';
        this.showAlert('Erro', message);
      }
    });
  }

  // Método para exibir alertas
  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  irParalogin() {
    this.router.navigate(['/login']);
  }
}
