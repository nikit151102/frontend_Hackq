import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { PersonalAccountComponent } from './personal-account.component';

const routes: Routes = [
  { path: '', component: PersonalAccountComponent, canActivate: [AuthGuard] , children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home' ,  loadChildren: () => import('../personal-account/personal-account.module').then(m => m.PersonalAccountModule)   },
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalAccountRoutingModule { }
