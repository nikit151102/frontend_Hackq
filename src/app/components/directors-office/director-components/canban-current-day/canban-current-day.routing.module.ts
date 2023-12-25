
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanbanCurrentDayComponent } from './canban-current-daycomponent';




const routes: Routes = [
  { path: '', component:  CanbanCurrentDayComponent} 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanbanCurrentDayRoutingModule { }