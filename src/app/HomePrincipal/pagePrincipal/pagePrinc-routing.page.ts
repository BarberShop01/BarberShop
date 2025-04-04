import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pagePrincPage } from './pagePrinc.page';

const routes: Routes = [
  {path: '', component: pagePrincPage,
  children: [
    {path:'home', loadChildren: () => import('../Home/home.module').then(m => m.homeModule)},
    {path:'localizations', loadChildren: () => import('../Localizações/loc.module').then(m=>m.LocPageModule) },
    {path:'barbeiros', loadChildren: () => import('../barbeiros/barb.module').then (m=>m.barbPageModule)},
    {path:'sobre', loadChildren: () => import('../Sobre/sobre.module').then (m=>m.sobreModule)}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pagePrincRoutings {}
