import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdsComponent } from './ords.component';



const routes: Routes = [
  { path: '', component:  OrdsComponent},
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdsRoutingModule { }