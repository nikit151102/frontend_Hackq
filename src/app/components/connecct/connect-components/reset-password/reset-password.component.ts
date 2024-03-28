import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConnectService } from '../../connect.service';
import { resetpassword } from '../../connect-interface';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup = new FormGroup({});;
  errorMessage = '';

  constructor(private fb: FormBuilder, public connectService: ConnectService) { }
  
  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      Mail: ['', Validators.required]
    });
  }

  onResetPasswordSubmit() {
    if (this.resetPasswordForm.valid) {
      const formData: resetpassword = {
        Mail: this.resetPasswordForm.value.Mail,
      };
      this.connectService.sendresetpassword(formData).subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.error('AJAX error:', error);
        }
      );
    } else {
      this.errorMessage = 'Пожалуйста, заполните все обязательные поля и исправьте ошибки.';
    }
  }
}
