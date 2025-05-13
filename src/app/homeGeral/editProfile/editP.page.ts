import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.serrvices'; // Certifique-se de que o caminho esteja correto

@Component({
  selector: 'app-editp',
  templateUrl: './editp.page.html',
  styleUrls: ['./editp.page.scss'],
  imports: [IonicModule,
    FormsModule
  ]
})
export class EditpPage implements OnInit {
  nome: string = '';
  email: string = '';
  numero: string = '';
  cpf: string = '';
  dataNascimento: string = '';
  senha: string = '';
  imagemPreview: string | File | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Recupera o e-mail do usuário logado, por exemplo, do localStorage
    const emailLogado = localStorage.getItem('authEmail');
    if (!emailLogado) {
      console.error('E-mail do usuário não encontrado no localStorage');
      return;
    }

    // Chama a API para pegar os dados do usuário
    this.apiService.getDadosUsuario(emailLogado).subscribe(
      (dados) => {
        console.log('Dados do usuário:', dados); // Verifique se os dados estão sendo retornados corretamente
        if (dados) {
          this.nome = dados.nome || '';
          this.email = dados.email || '';
          this.dataNascimento = dados.dataNascimento?.split('T')[0] || ''; // Formatação da data
          this.numero = dados.numero || '';
          this.cpf = dados.cpf || '';
          this.senha = dados.senha || ''; // Garantir que o backend não retorne senha
          this.imagemPreview = dados.imagem || 'assets/img/default-profile.jpg'; // URL da imagem ou padrão
        } else {
          console.error('Dados do usuário não encontrados!');
        }
      },
      (error) => {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    );
  }

  // Método para tratar alteração da imagem
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagemPreview = file;
    }
  }

  // Método para salvar as edições
  salvarEdicao() {
    const formData = new FormData();
    formData.append('nome', this.nome);
    formData.append('email', this.email);
    formData.append('dataNascimento', this.dataNascimento);
    formData.append('numero', this.numero);
    formData.append('cpf', this.cpf);
    formData.append('senha', this.senha);

    if (this.imagemPreview instanceof File) {
      formData.append('imagem', this.imagemPreview, this.imagemPreview.name);
    }

    // Certifique-se de que a API tem o método para atualizar o perfil
    this.apiService.atualizarPerfil(formData).subscribe(
      (res) => {
        console.log('Perfil atualizado com sucesso:', res);
      },
      (error) => {
        console.error('Erro ao atualizar perfil:', error);
      }
    );
  }
}
