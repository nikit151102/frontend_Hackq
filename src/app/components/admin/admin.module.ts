import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderAdminComponent
  ],
  providers: [MessageService,ConfirmationService ]
})
export class AdminModule { }
