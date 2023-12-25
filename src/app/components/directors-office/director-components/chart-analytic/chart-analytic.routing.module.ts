import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartAnalyticComponent } from './chart-analytic.component';



const routes: Routes = [
  { path: '', component: ChartAnalyticComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartAnalyticRoutingModule { }