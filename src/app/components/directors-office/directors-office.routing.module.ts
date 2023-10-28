import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorsOfficeComponent } from './directors-office.component';

import { ChartAnalyticComponent } from './director-components/chart-analytic/chart-analytic.component';

const routes: Routes = [
  { path: '', component: DirectorsOfficeComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home',  loadChildren: () => import('./director-components/home/home.module').then(m => m.HomeModule)   },
    { path: 'database',  loadChildren: () => import('./director-components/table/table.module').then(m => m.TableModule) },
    { path: 'kanbanboard',  loadChildren: () => import('./director-components/weekly-schedule/weekly-schedule.module').then(m => m.WeeklyScheduleModule) },
    { path: 'analytic', component:ChartAnalyticComponent },
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
