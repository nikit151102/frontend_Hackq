import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from './application.service';
@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  applicationForm: FormGroup = new FormGroup({});;
  currentStep = 1;
  name: string = '';
  Adres: string = '';
  Nomer: string = '';
  problema: string = '';
  
  isCheckedapplicantType: boolean = true;
  isPrivateHouse: boolean = false;

  constructor( private fb: FormBuilder, private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationForm = this.fb.group({
      applicantType: ['company', Validators.required],
      companyName: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      Nomer: ['', Validators.required],
      problema: ['', Validators.required],
      comments: ['', Validators.required],
      isPrivateHouse: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      officeNumber: ['', Validators.required],
      agreement: ['', Validators.required],
    });


  }
  updateCheckbox(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isCheckedapplicantType = target.checked;
  }
  updateCheckboxisPrivateHouse(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isPrivateHouse = target.checked;
    if (!this.isPrivateHouse) {
      this.applicationForm.get('officeNumber')?.disable();
    } else {
      this.applicationForm.get('officeNumber')?.enable();
    }
  }

  showStep(step: number) {
    console.log(`Show step ${step}`);
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 3) {
      console.log('Next step');
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      console.log('Previous step');
      this.currentStep--;
    }
  }

  addItim() {
    const formData = this.applicationForm.getRawValue();
  
    this.applicationService.sendApplicationData(formData)
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.error('AJAX error:', error);
        }
      );
  
    console.log('Заявка отправлена');
  
    this.applicationForm.reset(); // Сброс формы после отправки
  }
}