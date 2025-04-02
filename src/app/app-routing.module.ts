import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './cadaster/cadastro.page';
import { pagePrincPage } from './HomePrincipal/pagePrincipal/pagePrinc.page';
import { LocPage } from './HomePrincipal/Localizações/loc.page';
import { sobrePage } from './HomePrincipal/Sobre/sobre.page';
import { barbPage } from './HomePrincipal/barbeiros/barb.page';
import { HomePage } from './HomePrincipal/Home/home.page';


const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroPage },
  { path: 'esqueci-senha', loadChildren: () => import('./Esqueceu-senha/esqueceu-senha.module').then(m => m.EsqueciSenhaPageModule) },
  {
    path: 'registerUser', loadChildren: () => import('./RegisterUser/registerUser.module').then(m => m.RegisterUserModule)
  },
  { path: 'pagePrincipal', component: pagePrincPage , children:[
    {path:'home', component: HomePage},
    {path:'localization', component: LocPage},
    {path:'barbeiros', component: barbPage},
    {path:'sobre', component: sobrePage}
  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
