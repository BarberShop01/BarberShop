import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagePrincPage } from './homeGeral/pagePrincipal/pagePrinc.page';
import { HomePage } from './homeGeral/Home/home.page';
import { LocPage } from './homeGeral/Localizações/loc.page';
import { barbPage } from './homeGeral/barbeiros/barb.page';
import { sobrePage } from './homeGeral/Sobre/sobre.page';
import { editpPage } from './homeGeral/editProfile/editP.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.loginModule) },
  { path: 'esqueceuSenha', loadComponent: () => import('./esqueceuSenha/esqueceuSenha.page').then(m => m.EsqueceuSenhaPage) },
  { path: 'cadastro', loadComponent: () => import('./cadastro/cadastro.page').then(m => m.CadastroPage) },
  { path: 'pagePrincipal', component: PagePrincPage, children: [
    { path: 'home', component: HomePage },
    { path: 'localization', component: LocPage },
    { path: 'barbeiros', component: barbPage },
    { path: 'sobre', component: sobrePage },
    { path: 'editarPerfil', component: editpPage },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
