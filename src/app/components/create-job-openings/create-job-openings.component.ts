import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-job-openings',
  templateUrl: './create-job-openings.component.html',
  styleUrls: ['./create-job-openings.component.css']
})
export class CreateJobOpeningsComponent {
  vacancyForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.vacancyForm = this.fb.group({
      title: ['', Validators.required],
      specialty: ['', Validators.required],
      skills: [''],
      about: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      creationDate: [new Date(), Validators.required]
    });
  }

  onSubmit() {
    if (this.vacancyForm.valid) {
      console.log('Form submitted:', this.vacancyForm.value);
      // Здесь можно отправить форму на сервер или выполнить другие действия
    } else {
      console.log('Form is invalid. Please check all fields.');
    }
  }
}
