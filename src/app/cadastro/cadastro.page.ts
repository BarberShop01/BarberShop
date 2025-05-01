import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular'; // Importe o IonicModule
import { CommonModule } from '@angular/common'; // Se necessário, adicione também o CommonModule
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CadastroPage {
  nome: string = '';
  numero: string = '';
  cpf: string = '';
  email: string = '';
  dataNascimento: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  imagem: File | null = null; // Altere para File
  imagemPreview: string | null = null; // Pré-visualização da imagem
  carregando: boolean = false; // Para controle de carregamento

  constructor(private router: Router, private http: HttpClient) {}

  // Função de navegação para login
  irParalogin() {
    this.router.navigate(['/login']); // Substitua '/login' pela rota correta de sua aplicação
  }

  // Função de pré-visualização de imagem
  onImagemSelecionada(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagem = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagemPreview = e.target.result; // Atualiza a visualização da imagem
      };
      reader.readAsDataURL(file);
    }
  }

  // Função de cadastro
  async cadastrar() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    this.carregando = true; // Inicia o carregamento
    try {
      const formData = new FormData();
      formData.append('nome', this.nome);
      formData.append('numero', this.numero);
      formData.append('cpf', this.cpf);
      formData.append('email', this.email);
      formData.append('dataNascimento', this.dataNascimento);
      formData.append('senha', this.senha);
      if (this.imagem) {
        formData.append('imagem', this.imagem); // Envia o arquivo de imagem
      }

      const response = await this.http.post<any>('http://localhost:3000/api/cadastrar', formData).toPromise();

      if (response && response.message === 'Usuário cadastrado com sucesso!') {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/pagePrincipal/home']);
      } else {
        alert('Erro ao cadastrar usuário!');
      }
    } catch (erro) {
      console.error('Erro inesperado ao cadastrar:', erro);
      alert('Erro inesperado. Tente novamente.');
    } finally {
      this.carregando = false; // Finaliza o carregamento
    }
  }
}
