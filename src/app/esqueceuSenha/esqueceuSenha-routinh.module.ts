import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { esqueceuSenhaPage } from "./esqueceuSenha.page";

const routes: Routes = [
  {path:'', component: esqueceuSenhaPage}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class esqueceuPageRoutingPage {}
