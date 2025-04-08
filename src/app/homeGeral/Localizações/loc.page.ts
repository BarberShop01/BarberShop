import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
selector:'app-localization',
templateUrl:'./loc.page.html',
styleUrls:['./loc.page.scss'],
standalone: true,
imports:[CommonModule, IonicModule]
})
export class LocPage  {
  constructor() {}
}
