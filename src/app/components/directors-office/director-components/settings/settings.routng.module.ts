import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

import { 
  AuthGuardService as AuthGuard 
} from '../../auth-guard.service';


const routes: Routes = [
  { path: '', component: SettingsComponent,canActivate: [AuthGuard] } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
