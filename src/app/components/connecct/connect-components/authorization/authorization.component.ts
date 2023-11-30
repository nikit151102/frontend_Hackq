import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from '../../connect-interface';
import { ConnectService } from '../../connect.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  connectForm: FormGroup = new FormGroup({});;
  errorMessage = '';

  constructor(private fb: FormBuilder,public connectService: ConnectService){}

  ngOnInit() {
    this.connectForm = this.fb.group({
      UserLogin: ['', Validators.required],
      UserPassword: ['', Validators.required]
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
            console.log(data.redirect)

            localStorage.setItem('token', data.token);
            new HttpHeaders().set('Authorization', `Bearer ${data.token}`);
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
  
}
