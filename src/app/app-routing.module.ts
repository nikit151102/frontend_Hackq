import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DirectorsOfficeComponent} from './components/directors-office/directors-office.component'
import {TableComponent} from './components/directors-office/director-components/table/table.component'
import {HomeComponentdirector} from './components/directors-office/director-components/home/home.component'
import {WeeklyScheduleComponent} from './components/directors-office/director-components/weekly-schedule/weekly-schedule.component'
import {ChartAnalyticComponent}  from './components/directors-office/director-components/chart-analytic/chart-analytic.component'
const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  {
    path: 'login',
    loadChildren: () => import('./components/connecct/connecct.module').then(m => m.ConnecctModule)
  },
  { path: 'Directors/:id', component: DirectorsOfficeComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponentdirector  },
    { path: 'database', component:TableComponent },
    { path: 'kanbanboard', component:WeeklyScheduleComponent },
    { path: 'analytic', component:ChartAnalyticComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
