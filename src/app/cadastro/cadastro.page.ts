import { IonicModule } from "@ionic/angular";
import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";


@Component({
  selector:'app-cadastro',
  standalone: true,
  imports:[IonicModule, CommonModule],
  templateUrl:'./cadastro.page.html',
  styleUrls:['./cadastro.page.scss'],
})

export class Cadastro implements AfterViewInit{
  constructor (private router: Router) {}

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

  irParalogin(){
    this.router.navigate(['/login'])
  };

  irParaHome() {
    this.router.navigate(['/pagePrincipal/home'])
  }
}
