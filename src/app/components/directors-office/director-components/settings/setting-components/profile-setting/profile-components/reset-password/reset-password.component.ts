import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule, NgIf, ButtonModule]
})
export class ResetPasswordComponent {
  
  @Input() CurrentUser: any = '';
  resetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['CurrentUser'] && changes['CurrentUser'].currentValue) {
    }
  }
  
  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmNewPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, { validator: this.passwordMatchValidator });

    this.resetPasswordForm.get('ConfirmNewPassword')?.valueChanges.subscribe(() => {
      setTimeout(() => {
        this.resetPasswordForm.get('ConfirmNewPassword')?.updateValueAndValidity();
      });
    });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('ConfirmNewPassword')?.value;
    if (confirmPassword && confirmPassword.length < 8) {
      return { 'passwordLength': true };
    }
    return newPassword === confirmPassword ? null : { 'passwordMismatch': true };
  }

}
