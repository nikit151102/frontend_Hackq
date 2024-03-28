import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConnectService } from '../../connect.service';
import { registration } from '../../connect-interface';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class RegistrationComponent implements OnInit{

  createForm: FormGroup = new FormGroup({});;
  errorMessage = '';

  constructor(private fb: FormBuilder, private connectService: ConnectService){}

  ngOnInit() {
    this.createForm = this.fb.group({
      newlogin: ['', Validators.required],
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      newmail: ['', [Validators.required, Validators.email]]
    });
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


}
