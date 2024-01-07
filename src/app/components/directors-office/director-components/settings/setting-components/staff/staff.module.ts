import { NgModule } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { StaffComponent } from './staff.component';
import { StaffUserComponent } from './staff_user/staff-user.component';

@NgModule({
  declarations: [
    StaffComponent,
    StaffUserComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  providers: [
    ConfirmationService,MessageService
  ],
  exports: [
    StaffComponent,
    StaffUserComponent
  ]
})
export class StaffSettingsModule { }