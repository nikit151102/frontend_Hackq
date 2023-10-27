import { Component, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connecct',
  templateUrl: './connecct.component.html',
  styleUrls: ['./connecct.component.css']
})
export class ConnecctComponent {
  connectForm: FormGroup = new FormGroup({});;
  createForm: FormGroup = new FormGroup({});;
  resetPasswordForm: FormGroup = new FormGroup({});;
  readonlyInputs: { [key: string]: boolean } = {
    UserLogin: false,
    UserPassword: false,
    newlogin: false,
    newpassword: false,
    newmail: false,
    Mail: false
  };
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private renderer: Renderer2, private el: ElementRef) {}

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

  // Добавьте обработчики событий
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
      const inputUserLogin = this.connectForm.value.UserLogin;
      const inputUserPassword = this.connectForm.value.UserPassword;
  
      const formData = {
        name: 'вход',
        UserLogin: inputUserLogin,
        UserPassword: inputUserPassword,
      };
  
      this.http.post('http://localhost:3000/personal_account/user', formData).subscribe(
        (data: any) => {
          console.log(data);
          if (data.success) {
            // Если успешный вход, перенаправить пользователя на другую страницу
           
            window.location.href = data.redirect;
          } else {
            // Если сервер вернул сообщение о неверном логине или пароле
            this.errorMessage = data.message;
          }
        },
        (error) => {
          // Обработка ошибки при запросе
          console.error('AJAX error:', error);
        }
      );
    } else {
      this.errorMessage = 'Пожалуйста, заполните все обязательные поля и исправьте ошибки.';
    }
  }

  onCreateSubmit() {
    if (this.createForm.valid) {
      const newlogin = this.createForm.value.newlogin;
      const newpassword = this.createForm.value.newpassword;
      const newmail = this.createForm.value.newmail;
  
      const formData = {
        newlogin: newlogin,
        newpassword: newpassword,
        newmail: newmail,
      };
  
      this.http.post('http://localhost:3000/personal_account/create_user', formData).subscribe(
        (data: any) => {
          console.log(data);
          if (data.success) {
            // Если успешная регистрация, выполнить перенаправление или другие действия
            window.location.href = '/personal_account'; // Укажите URL страницы успешной регистрации
          } else {
            // Если сервер вернул сообщение об ошибке
            this.errorMessage = data.message;
          }
        },
        (error) => {
          // Обработка ошибки при запросе
          console.error('AJAX error:', error);
        }
      );
    } else {
      this.errorMessage = 'Пожалуйста, заполните все обязательные поля и исправьте ошибки.';
    }
  }

  onResetPasswordSubmit() {
  if (this.resetPasswordForm.valid) {
    const mail = this.resetPasswordForm.value.Mail;

    const formData = {
      Mail: mail,
    };

    this.http.post('http://localhost:3000/personal_account/resetpassword', formData).subscribe(
      (data: any) => {
        console.log(data);
        // Здесь обрабатывайте успешный или неуспешный сброс пароля
      },
      (error) => {
        // Обработка ошибки при запросе
        console.error('AJAX error:', error);
      }
    );
  } else {
    this.errorMessage = 'Пожалуйста, заполните все обязательные поля и исправьте ошибки.';
  }
}

  onInputFocus(fieldName: string) {
    this.readonlyInputs[fieldName] = false;
  }
}
