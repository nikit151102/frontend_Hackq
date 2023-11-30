import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent {
  CurrentUser: any;
  userForm!: FormGroup;
  resetPasswordForm!: FormGroup;
  constructor(private fb: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getDataCurrentUser().subscribe(
      response => {
        console.log('CurrentUser', response);
        this.CurrentUser = response;

        this.userForm.patchValue({
          firstName: this.CurrentUser.fullname.split(' ')[1],
          lastName: this.CurrentUser.fullname.split(' ')[0],
          middleName: this.CurrentUser.fullname.split(' ')[2] || '',
          phoneNumber: this.CurrentUser.phone,
          email: this.CurrentUser.email
        });
      },
      error => {
        console.error('Error:', error);
      }
    );

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmNewPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
    
  }


  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
