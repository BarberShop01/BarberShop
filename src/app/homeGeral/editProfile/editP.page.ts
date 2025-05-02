import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
selector:'app-editProfile',
templateUrl:'./editP.page.html',
styleUrls:['./editP.page.scss'],
standalone: true,
imports:[CommonModule, IonicModule]
})
export class EditpPage{
  constructor () {}
}
