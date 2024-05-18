import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofilesComponent } from './userprofiles.component';


const routes: Routes = [
  {
    path: '', component:UserprofilesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserprofilesRoutingModule { }
