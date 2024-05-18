import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRezumeComponent } from './create-rezume.component';

const routes: Routes = [
  { path: '', component: CreateRezumeComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRezumeRoutingModule { }
