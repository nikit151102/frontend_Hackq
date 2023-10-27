import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnecctComponent } from './connecct.component';

const routes: Routes = [
  { path: '', component: ConnecctComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
