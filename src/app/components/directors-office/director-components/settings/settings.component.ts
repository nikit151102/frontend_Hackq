import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component,  OnInit } from '@angular/core';
import { StaffComponent } from './setting-components/staff/staff.component';
import { ProfileSettingComponent } from './setting-components/profile-setting/profile-setting.component';
import { TabViewModule } from 'primeng/tabview';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    animations: [
        trigger('customFadeIn', [
            state('void', style({ opacity: 0 })),
            transition(':enter', animate('500ms ease-out', style({ opacity: 1 })))
        ])
    ],
    standalone: true,
    imports: [NgIf, TabViewModule, ProfileSettingComponent, StaffComponent]
})
export class SettingsComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit(): void  {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
}
}