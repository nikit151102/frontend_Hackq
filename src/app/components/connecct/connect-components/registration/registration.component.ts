import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConnectService } from '../../connect.service';
import { registration } from '../../connect-interface';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, NgIf, InputMaskModule, InputTextModule,]
})
export class RegistrationComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});;
  errorMessage = '';

  constructor(private fb: FormBuilder, private connectService: ConnectService) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      telegram: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  addAtSign() {
    if (this.createForm) {
      const telegramControl = this.createForm.get('telegram');
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

  onCreateSubmit() {
    if (this.createForm.valid) {
      const formData: registration = {
        telegram: this.createForm.value.telegram,
        email: this.createForm.value.email,
        phone: this.createForm.value.phone,
        password: this.createForm.value.password,
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
      this.errorMessage = 'Заполните все поля.';
    }
  }


}
