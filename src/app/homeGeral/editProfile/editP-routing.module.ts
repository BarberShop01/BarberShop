import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { editpPage } from "./editP.page";

const Routes: Routes = [
{path:'', component: editpPage}
];

@NgModule({
imports:[RouterModule.forChild(Routes)],
exports: [RouterModule],
})

export class editProutingModule{}
