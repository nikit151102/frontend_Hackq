import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorRoutingModule } from './directors-office.routing.module';
import { SidebarComponent } from './director-components/sidebar/sidebar.component';
import { NavHeaderComponent } from './director-components/nav-header/nav-header.component';
import { ModalService } from './director-components/modal.service'
import { ChartModule } from 'primeng/chart';

import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { DirectorsOfficeComponent } from './directors-office.component';

@NgModule({
  declarations: [
    DirectorsOfficeComponent,
    SidebarComponent,
    NavHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectorRoutingModule,
    ChartModule,
    NgChartsModule,
     
  ],
  providers: [ModalService],
})
export class DirectorsOfficeModule { }
