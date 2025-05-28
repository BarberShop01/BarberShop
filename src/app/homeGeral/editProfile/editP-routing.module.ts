import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { EditpPage } from "./editP.page";

const Routes: Routes = [
{path:'', component: EditpPage}
];

@NgModule({
imports:[RouterModule.forChild(Routes)],
exports: [RouterModule],
})

export class editProutingModule{}
