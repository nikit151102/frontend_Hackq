import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { 
    AuthGuardService as AuthGuard 
  } from './auth-guard.service';
  
const routes: Routes = [
    { path: '', component: AdminComponent, children: [ //, canActivate: [AuthGuard] 
        { path: '', redirectTo: 'userprofiles', pathMatch: 'full' }, 
        { path: 'userprofiles' ,  loadChildren: () => import('./components/userprofiles/userprofiles.module').then(m => m.UserprofilesModule)   },
        { path: 'resume',   loadChildren: () => import('./components/resume/resume.module').then(m => m.ResumeModule) },
        { path: 'JobOpenings',   loadChildren: () => import('./components/JobOpenings/Job-openings.module').then(m => m.JobOpeningsModule) },
        { path: 'project',   loadChildren: () => import('./components/project/project.module').then(m => m.ProjectModule) }
      ] },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
