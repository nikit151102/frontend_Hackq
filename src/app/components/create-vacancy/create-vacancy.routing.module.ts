import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVacancyComponent } from './create-vacancy.component';

const routes: Routes = [
  { path: '', component: CreateVacancyComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateVacancyRoutingModule { }
