import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { Cadastro } from "./cadastro.page";

const routes: Routes = [
  {path:'', component: Cadastro}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class cadastroRoutingPage {}
