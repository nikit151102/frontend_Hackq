import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { login } from '../../connect-interface';
import { ConnectService } from '../../connect.service';
import { HttpHeaders } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, NgIf]
})
export class AuthorizationComponent implements OnInit {

  connectForm: FormGroup = new FormGroup({});;
  errorMessage = '';

  constructor(private fb: FormBuilder, public connectService: ConnectService, private router: Router) { }

  ngOnInit() {
    this.connectForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  addAtSign() {
    if (this.connectForm) {
      const telegramControl = this.connectForm.get('telegram');
      if (telegramControl) {
        let value = telegramControl.value;
        if (!value) {
          telegramControl.setValue('@');
        } else if (!value.startsWith('@')) {
          telegramControl.setValue('@' + value);
        }
      }
    }
  }


  
  onSubmit() {
    if (this.connectForm.valid) {
      const formData: login = {
        telegram: this.connectForm.value.login,
        password: this.connectForm.value.password,
      };

      this.connectService.sendlogin(formData).subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
            console.log('Redirecting to:', `/user/3к3к43`);
            localStorage.setItem('token', data.token);
            this.router.navigate([`/user`, data.token])
             new HttpHeaders().set('Authorization', 'Bearer ' + data.token);;
          } else {
            this.errorMessage = `/user/${data.token}`;
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