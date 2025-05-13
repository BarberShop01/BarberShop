import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Método para buscar a imagem de perfil do usuário
  getProfileImage(email: string) {
    return this.http.get<any>(`${this.apiUrl}/usuario?email=${email}`).pipe(
      map((usuario) => {
        const img = usuario?.imagem;
        if (!img) return 'assets/img/default-profile.jpg';

        return img.startsWith('http://') || img.startsWith('https://')
          ? img
          : `http://localhost:3000/uploads/${img}`;
      }),
      catchError((error) => {
        console.error('Erro ao buscar a imagem de perfil:', error);
        return of('assets/img/default-profile.jpg');
      })
    );
  }

  // Método para cadastrar usuário com imagem
  cadastrarComImagem(formData: FormData) {
    return this.http.post(`${this.apiUrl}/cadastrar`, formData).pipe(
      catchError((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        throw error;
      })
    );
  }

  // Método para fazer login do usuário
  loginUsuario(email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }

  // Método para fazer logout
  logout() {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  // Método para buscar os dados do usuário
  getDadosUsuario(email: string) {
    return this.http.get<any>(`${this.apiUrl}/usuario?email=${email}`).pipe(
      catchError((error) => {
        console.error('Erro ao buscar dados do usuário:', error);
        return of(null);
      })
    );
  }

  // Método para atualizar o perfil do usuário com FormData
  atualizarPerfil(formData: FormData) {
    return this.http.put(`${this.apiUrl}/usuario`, formData).pipe(
      catchError((error) => {
        console.error('Erro ao atualizar perfil do usuário:', error);
        return of(null);
      })
    );
  }
}
