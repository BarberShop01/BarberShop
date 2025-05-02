import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagePrincPage } from './homeGeral/pagePrincipal/pagePrinc.page';
import { HomePage } from './homeGeral/Home/home.page';
import { LocPage } from './homeGeral/Localizações/loc.page';
import { BarbPage } from './homeGeral/barbeiros/barb.page';
import { SobrePage } from './homeGeral/Sobre/sobre.page';
import { EditpPage } from './homeGeral/editProfile/editP.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'esqueceuSenha', loadComponent: () => import('./esqueceuSenha/esqueceuSenha.page').then(m => m.EsqueceuSenhaPage) },
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule) },
  {
    path: 'pagePrincipal',
    component: PagePrincPage,
    children: [
      { path: 'home', component: HomePage },
      { path: 'localization', component: LocPage },
      { path: 'barbeiros', component: BarbPage },
      { path: 'sobre', component: SobrePage },
      { path: 'editarPerfil', component: EditpPage },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
