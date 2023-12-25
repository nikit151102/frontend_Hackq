import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorsOfficeComponent } from './directors-office.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

const routes: Routes = [
  { path: '', component: DirectorsOfficeComponent, canActivate: [AuthGuard] , children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home',  loadChildren: () => import('./director-components/home/home.module').then(m => m.HomeModule)   },
    { path: 'database',  loadChildren: () => import('./director-components/table/table.module').then(m => m.TablepageModule) },
    { path: 'KanbanCurrentDay',  loadChildren: () => import('./director-components/canban-current-day/canban-current-day.module').then(m => m.CanbanCurrentDayModule) },
    { path: 'kanbanboard',  loadChildren: () => import('./director-components/weekly-schedule/weekly-schedule.module').then(m => m.WeeklyScheduleModule) },
    { path: 'analytic', loadChildren: () => import('./director-components/chart-analytic/chart-analytic.module').then(m => m.ChartAnalyticModule) },
    { path: 'settings', loadChildren: () => import('./director-components/settings/settings.module').then(m => m.SettingsModule) },
    
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
