import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProfileImage(email: string) {
    return this.http.get<any>(`${this.apiUrl}/usuario?email=${email}`).pipe(
      map(usuario => {
        const img = usuario?.imagem;
        if (!img) return 'assets/img/default-profile.jpg';

        // Se já for URL completa
        if (img.startsWith('http://') || img.startsWith('https://')) {
          return img;
        }

        // Se for só o nome do arquivo
        return `http://localhost:3000/uploads/${img}`;
      }),
      catchError(error => {
        console.error('Erro ao buscar a imagem de perfil:', error);
        return of('assets/img/default-profile.jpg');
      })
    );
  }



  cadastrarComImagem(formData: FormData) {
    return this.http.post(`${this.apiUrl}/cadastrar`, formData).pipe(
      catchError(error => {
        console.error('Erro ao cadastrar usuário:', error);
        throw error;
      })
    );
  }

  loginUsuario(email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }

  logout() {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    return this.http.post(`${this.apiUrl}/logout`, {});
  }
}
