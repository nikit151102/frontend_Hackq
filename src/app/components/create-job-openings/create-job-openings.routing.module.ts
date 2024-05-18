import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobOpeningsComponent } from './create-job-openings.component';

const routes: Routes = [
  { path: '', component: CreateJobOpeningsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateJobOpeningsRoutingModule { }
