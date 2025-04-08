import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './login.page.html',
  styleUrls:['./login.page.scss']
})
export class loginPage {
  constructor (private router: Router) {}

  irParaEsqueceuSenha(){
    this.router.navigate(['/esqueceuSenha'])
  };

  irParaCadastro(){
    this.router.navigate(['./cadastro'])
  }
}
