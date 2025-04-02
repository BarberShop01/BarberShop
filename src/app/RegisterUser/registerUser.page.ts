import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerUser',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './registerUser.page.html',
  styleUrls: ['./registerUser.page.scss'],
})
export class RegisterUser implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.setupPhotoUpload();
  }

  setupPhotoUpload() {
    const photoBox = document.querySelector(".photo-box") as HTMLElement;
    const photoText = document.getElementById("photo-text-link") as HTMLElement;
    const fileInput = document.getElementById("upload-photo") as HTMLInputElement;
    const profileImage = document.querySelector(".photo-preview") as HTMLImageElement;

    if (!photoBox || !photoText || !fileInput || !profileImage) {
      console.error("Elementos não encontrados.");
      return;
    }

    const openFileSelector = () => fileInput.click();
    photoBox.addEventListener("click", openFileSelector);
    photoText.addEventListener("click", openFileSelector);


    fileInput.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!target.files || target.files.length === 0) return;

      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        profileImage.src = e.target?.result as string;
      };

      reader.readAsDataURL(file);
    });
  };

  irParaCadastro(){
    this.router.navigate(['/cadastro'])
  }

  irpagePrincipal(){
    this.router.navigate(['/pagePrincipal'])
  }
}
