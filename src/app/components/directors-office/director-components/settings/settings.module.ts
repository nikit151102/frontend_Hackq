import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routng.module';
import { TabViewModule } from 'primeng/tabview';
import { ProfileSettingComponent } from './setting-components/profile-setting/profile-setting.component';
import { StaffComponent } from './setting-components/staff/staff.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileSettingComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    TabViewModule
  ],
})
export class SettingsModule { }
