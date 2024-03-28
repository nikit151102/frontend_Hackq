import { Component } from '@angular/core';
import { SettingsService } from './settings.service';
import { uploadedImgComponent } from './profile-components/uploaded-img/uploaded-img.component';
import { ResetPasswordComponent } from './profile-components/reset-password/reset-password.component';
import { DataUserComponent } from './profile-components/data-user/data-user.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CardUserComponent } from './profile-components/card_user/card-user.component';

@Component({
    selector: 'app-profile-setting',
    templateUrl: './profile-setting.component.html',
    styleUrls: ['./profile-setting.component.css'],
    standalone: true,
    imports: [CardUserComponent, FieldsetModule, DataUserComponent, ResetPasswordComponent, uploadedImgComponent]
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
