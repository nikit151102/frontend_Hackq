import { Component, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectService } from './connect.service';
import { login, registration, resetpassword } from './connect-interface';

@Component({
  selector: 'app-connecct',
  templateUrl: './connecct.component.html',
  styleUrls: ['./connecct.component.css']
})
export class ConnecctComponent {
  connectForm: FormGroup = new FormGroup({});;
  createForm: FormGroup = new FormGroup({});;
  resetPasswordForm: FormGroup = new FormGroup({});;
  errorMessage = '';

  constructor(private fb: FormBuilder, private renderer: Renderer2, private el: ElementRef, private connectService: ConnectService) { }

  ngOnInit() {
    this.connectForm = this.fb.group({
      UserLogin: ['', Validators.required],
      UserPassword: ['', Validators.required]
    });

    this.createForm = this.fb.group({
      newlogin: ['', Validators.required],
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      newmail: ['', [Validators.required, Validators.email]]
    });

    this.resetPasswordForm = this.fb.group({
      Mail: ['', Validators.required]
    });

    const signUp = this.el.nativeElement.querySelector(".signup-link");
    const login = this.el.nativeElement.querySelector(".login-link");
    const resetPasswordForm = this.el.nativeElement.querySelector(".ResetPasswordForm");
    const ConnectForm = this.el.nativeElement.querySelector(".ConnectForm");
    const reset_password = this.el.nativeElement.querySelector(".reset_password");
    const viewConnectForm = this.el.nativeElement.querySelector(".viewConnectForm");

    signUp.addEventListener("click", () => {
      this.renderer.addClass(this.el.nativeElement.querySelector(".container"), "active");
    });

    login.addEventListener("click", () => {
      this.renderer.removeClass(this.el.nativeElement.querySelector(".container"), "active");
    });

    reset_password.addEventListener("click", () => {
      this.renderer.setStyle(ConnectForm, "display", "none");
      this.renderer.setStyle(resetPasswordForm, "display", "block");
    });

    viewConnectForm.addEventListener("click", () => {
      this.renderer.setStyle(ConnectForm, "display", "block");
      this.renderer.setStyle(resetPasswordForm, "display", "none");
    });
  }

  onSubmit() {
    if (this.connectForm.valid) {
      const formData: login = {
        UserLogin: this.connectForm.value.UserLogin,
        UserPassword: this.connectForm.value.UserPassword,
      };

      this.connectService.sendlogin(formData).subscribe(
        (data: any) => {
          console.log(data);
          if (data.success) {
            window.location.href = data.redirect;
          } else {
            this.errorMessage = data.message;
          }
        },
        (error) => {
          console.error('AJAX error:', error);
        }
      );
    } else {
      this.errorMessage = 'Пожалуйста, заполните все обязательные поля и исправьте ошибки.';
    }
  }

  onCreateSubmit() {
    if (this.createForm.valid) {
      const formData: registration = {
        newlogin: this.createForm.value.newlogin,
        newpassword: this.createForm.value.newpassword,
        newmail: this.createForm.value.newmail,
      };

      this.connectService.sendregistration(formData).subscribe(
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
