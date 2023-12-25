import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routng.module';
import { TabViewModule } from 'primeng/tabview';
import { ProfileSettingComponent } from './setting-components/profile-setting/profile-setting.component';
import { StaffComponent } from './setting-components/staff/staff.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { StaffUserComponent } from './setting-components/staff/staff_user/staff-user.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileSettingComponent,
    StaffComponent,
    StaffUserComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    TabViewModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FieldsetModule,
    FileUploadModule
  ],
})
export class SettingsModule { }