import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent {

  CurrentUser: any;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getDataCurrentUser().subscribe(
      response => {
        this.CurrentUser = response;
      },
      error => {
        console.error('Error:', error);
      }
    );
    }

  
}
