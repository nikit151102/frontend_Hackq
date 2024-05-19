import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { CreateRezumeService } from './create-rezume.service';
import { catchError, of } from 'rxjs';
import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Teg {
  id: number;
  name: string;
  type: string;
  availabilityStatus: string;
}

@Component({
  selector: 'app-create-rezume',
  templateUrl: './create-rezume.component.html',
  styleUrls: ['./create-rezume.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, MultiSelectModule]
})
export class CreateRezumeComponent implements OnInit {
  resumeForm?: FormGroup;
  Tags: Teg[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private createRezumeService: CreateRezumeService) {}

  ngOnInit() {
    this.resumeForm = this.fb.group({
      motivation: [''],
      hoursPerWeek: [],
      freeLink: [''],
      ownLink: [''],
      details: [''],
      tags: this.fb.array([this.createTag()])
    });

    this.createRezumeService.sendtags().subscribe(
      (data: any) => {
        console.log(data);
        this.Tags = data;
        console.log(this.Tags);
      },
      error => {
        console.error('Error fetching tags', error);
      }
    );
  }

  createTag(): FormGroup {
    return this.fb.group({
      id: [0],
      name: ['ee'],
      type: ['MISC'],
      availabilityStatus: ['VERIFICATION'],
      competenceLevel: ["NONE"]
    });
  }

  get userTags(): FormArray {
    return this.resumeForm?.get('userDto')?.get('tags') as FormArray;
  }

  get tags(): FormArray {
    return this.resumeForm?.get('tags') as FormArray;
  }

  addUserTag() {
    this.userTags.push(this.createTag());
  }

  addTag() {
    this.tags.push(this.createTag());
  }

  onSubmit() {
    if (this.resumeForm?.valid) {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')); // Use getItem() instead of directly accessing localStorage
      this.http.post('http://31.128.39.73:8080/resumes', this.resumeForm?.value, { headers }) // Corrected the order of parameters
        .subscribe(response => {
          console.log('Resume submitted successfully', response);
        }, (error: any) => {
          console.error('Error submitting resume', error);
        });
    }
  }
  
}
