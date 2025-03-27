import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUser } from './registerUser.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterUser
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterUserModuleRounting {}
