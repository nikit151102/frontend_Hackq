import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CreatevacancyService } from './create-vacancy.service';

interface Teg {
  id: number;
  name: string;
  type: string;
  availabilityStatus: string;
}

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.css'],
  standalone: true,
  imports: [DropdownModule,
    FormsModule,
    ReactiveFormsModule, NgIf, MultiSelectModule]
})
export class CreateVacancyComponent implements OnInit {
  profileForm: FormGroup;
  specialties = ['Developer', 'Designer', 'Manager']; // Example specialties
  paymentFormats = ['Без оплаты', 'за оплату', 'за долю']; // Example payment formats

  cities!: any[];

  selectedCities!: any[];
  Tags: Teg[] = [];
  Skills: Teg[] = [];

  constructor(private fb: FormBuilder, private createvacancyService: CreatevacancyService) {
    this.profileForm = this.fb.group({
      title: ['', Validators.required],
      specialty: ['', Validators.required],
      skills: [''],
      about: ['', Validators.required],
      paymentFormat: ['', Validators.required],
      creationDate: [{ value: new Date(), disabled: true }, Validators.required]
    });
  }

  ngOnInit(): void {
    this.createvacancyService.sendtags().subscribe(
      (data: any) => {
        console.log(data);
        this.Tags = data
      },
      error => {
        console.error('Error fetching tags', error);
      }
    );
    this.createvacancyService.sendskills().subscribe(
      (data: any) => {
        console.log(data);
        this.Skills = data
      },
      error => {
        console.error('Error fetching tags', error);
      }
    );
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Handle form submission
    } else {
      console.log('Form is invalid');
    }
  }
}