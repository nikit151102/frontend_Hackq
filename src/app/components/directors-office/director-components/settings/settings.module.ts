import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routng.module';
import { ProfileSettingsModule } from './setting-components/profile-setting/profile-setting.module';
import { StaffSettingsModule } from './setting-components/staff/staff.module';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        TabViewModule,
        ProfileSettingsModule,
        StaffSettingsModule,
        SettingsComponent,
    ],
})
export class SettingsModule { }
