import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ConnecctComponent } from './components/connecct/connecct.component';
import {DirectorsOfficeComponent} from './components/directors-office/directors-office.component'
import {TableComponent} from './components/director-components/table/table.component'
import {HomeComponentdirector} from './components/director-components/home/home.component'
import {WeeklyScheduleComponent} from './components/director-components/weekly-schedule/weekly-schedule.component'
import {ChartAnalyticComponent}  from './components/director-components/chart-analytic/chart-analytic.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: ConnecctComponent },
  { path: 'Directors/:id', component: DirectorsOfficeComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponentdirector  },
    { path: 'database', component:TableComponent },
    { path: 'kanbanboard', component:WeeklyScheduleComponent },
    { path: 'analytic', component:ChartAnalyticComponent },
    // Добавьте другие вкладки и компоненты здесь
  ] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
