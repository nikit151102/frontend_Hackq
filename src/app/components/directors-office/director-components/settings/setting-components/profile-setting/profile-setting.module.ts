import { NgModule } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataUserComponent } from './profile-components/data-user/data-user.component';
import { CardUserComponent } from './profile-components/card_user/card-user.component';
import { uploadedImgComponent } from './profile-components/uploaded-img/uploaded-img.component';
import { ResetPasswordComponent } from './profile-components/reset-password/reset-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileSettingComponent } from './profile-setting.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        FieldsetModule,
        FileUploadModule,
        ConfirmPopupModule,
        ToastModule,
        ProfileSettingComponent,
        DataUserComponent,
        CardUserComponent,
        ResetPasswordComponent,
        uploadedImgComponent,
    ],
    providers: [ConfirmationService, MessageService],
    exports: [
        ProfileSettingComponent,
        DataUserComponent,
        CardUserComponent,
        ResetPasswordComponent,
        uploadedImgComponent
    ]
})
export class ProfileSettingsModule { }
