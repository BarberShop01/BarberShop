import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-marcpage',
  templateUrl: './marc.page.html',
  styleUrls: ['./marc.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class MarcPage {
  constructor(private router: Router) {}

  barbeiroSelecionado?: string;

  barbeiros = [
    { nome: 'Lucas Ramos', valor: 'lucas' },
    { nome: 'João Silva', valor: 'joao' }
  ];

  irParaHome() {
    this.router.navigate(['/pagePrincipal/home']);
  }

  irParaTabela() {
    if (this.barbeiroSelecionado === 'lucas') {
      this.router.navigate(['/pagePrincipal/agendamento'], {
        queryParams: { barbeiro: this.barbeiroSelecionado }
      });
    } else if (this.barbeiroSelecionado === 'joao') {
      this.router.navigate(['/pagePrincipal/marcJoao'], {
        queryParams: { barbeiro: this.barbeiroSelecionado }
      });
    }
  }
}
