import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector:'app-barbeiros',
  templateUrl:'./barb.page.html',
  styleUrls:['./barb.page.scss'],
  standalone: true,
  imports:[CommonModule, IonicModule]
})
export class BarbPage{
  constructor() {}
}
