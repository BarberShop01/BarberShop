import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importando HttpClient

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
  mostrarSenha = false;

  constructor(private router: Router, private http: HttpClient) {}

  async fazerLogin() {
    try {
      // Enviar os dados para o backend (endpoint de login)
      const response = await this.http.post<any>('http://localhost:3000/api/login', {
        email: this.email,
        senha: this.senha
      }).toPromise();

      // Verificando se a resposta do backend é válida
      console.log("Resposta do servidor:", response);

      if (response && response.message === 'Login bem-sucedido') {
        console.log("Usuário logado:", response.usuario);

        // Exibir alerta de sucesso
        alert("Login realizado com sucesso!");

        // Salvar o e-mail no localStorage para uso em outras páginas
        localStorage.setItem('emailUsuario', this.email);

        // Redirecionar o usuário para a página principal
        this.router.navigate(['/pagePrincipal/home']);
      } else {
        // Caso haja algum erro no login (por exemplo, e-mail ou senha inválidos)
        console.error("Erro ao fazer login:", response.message);
        alert("E-mail ou senha inválidos.");
      }
    } catch (erro: any) {  // Tratar o erro como tipo 'any'
      // Exibindo detalhes completos do erro para depuração
      console.error("Erro inesperado no login:", erro);

      if (erro.status === 401) {
        alert("E-mail ou senha inválidos.");
      } else {
        alert("Erro inesperado. Tente novamente.");
      }
    }
  }


  irParaEsqueceuSenha() {
    // Navegar para a página de recuperação de senha
    this.router.navigate(['/esqueceuSenha']);
  }

  irParaCadastro() {
    // Navegar para a página de cadastro
    this.router.navigate(['/cadastro']);
  }

  alternarVisibilidadeSenha() {
    // Alternar a visibilidade da senha no campo de entrada
    this.mostrarSenha = !this.mostrarSenha;
  }
}
