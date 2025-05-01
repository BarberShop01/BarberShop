import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EsqueceuSenhaPage } from "./esqueceuSenha.page";

const routes: Routes = [
  {path:'', component: EsqueceuSenhaPage}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class esqueceuPageRoutingPage {}
