import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./components/connecct/connecct.module').then(m => m.ConnecctModule)
  },
  { path: 'Director/:id',  
    loadChildren: () => import('./components/directors-office/directors-office.module').then(m => m.DirectorsOfficeModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
