import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-marcpage',
  templateUrl: './marc.page.html',
  styleUrls: ['./marc.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MarcPage {
  constructor(private router: Router) {}

  irParaHome(){
    this.router.navigate(['/pagePrincipal/home'])
  }
}
