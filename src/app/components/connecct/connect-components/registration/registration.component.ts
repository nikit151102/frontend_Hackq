import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConnectService } from '../../connect.service';
import { registration } from '../../connect-interface';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, NgIf, InputMaskModule, InputTextModule,RadioButtonModule]
})
export class RegistrationComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});;
  errorMessage = '';

  constructor(private fb: FormBuilder, private connectService: ConnectService) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      cityOfResidence: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      telegram: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      ownLink: ['', [Validators.required]]
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
      const formValues = this.createForm.value;

      const requestData = {
        id: 0,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        tags: [
          {
            id: 0,
            name: "string",
            type: "MISC",
            availabilityStatus: "VERIFICATION"
          }
        ],
        gender: formValues.gender,
        age: formValues.age,
        freeLink: "string",
        ownLink: formValues.ownLink,
        aboutMe: "string",
        dateOfRegistration: new Date().toISOString(),
        cityOfResidence: formValues.cityOfResidence,
        telegram: formValues.telegram,
        email: formValues.email,
        phone: formValues.phone,
        password: formValues.password
      };
      console.log("requestData",requestData)
      this.connectService.sendregistration(requestData).subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.error('AJAX error:', error);
        }
      );
  }

}
