import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from './settings.service';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent {

  CurrentUser: any;
  userForm!: FormGroup;
  resetPasswordForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getDataCurrentUser().subscribe(
      response => {
        console.log('CurrentUser', response);
        this.CurrentUser = response;
        this.setCurrentUserData(this.CurrentUser);

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
    this.userForm.disable();
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmNewPassword: ['', [Validators.required, Validators.minLength(8)]],
    });

  }

  setCurrentUserData(CurrentUser: any) {
    this.userForm.patchValue({
      firstName: CurrentUser.fullname.split(' ')[1],
      lastName: CurrentUser.fullname.split(' ')[0],
      middleName: CurrentUser.fullname.split(' ')[2] || '',
      phoneNumber: CurrentUser.phone,
      email: CurrentUser.email
    });
  }

  resetUserForm() {
    console.log("resetUserForm")
    this.setCurrentUserData(this.CurrentUser);
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.userForm.enable();
    } else {
      this.userForm.disable();
    }
  }

  uploadedFiles: any[] = [];

  onUpload(event: any) {
    if (event instanceof FileUpload) {
      if (event.files) {
        for (let file of event.files) {
          this.uploadedFiles.push(file);
        }
      }
    }
  }
}
