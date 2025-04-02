import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocPage } from "./loc.page";



const routes: Routes = [
  {
    path: '',
    component: LocPage
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class locPageRoutingModule {}
