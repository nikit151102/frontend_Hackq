import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login', loadChildren: () => import('./components/connecct/connect.module').then(m => m.ConnectModule)
  },
  {
    path: 'vacancy', loadChildren: () => import('./components/vacancy/vacancy.module').then(m => m.VacancyModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./components/personal-account/personal-account.module').then(m => m.PersonalAccountModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
