import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateRezumeService } from '../create-rezume/create-rezume.service';

interface Tag {
  id: number,
  name: string,
  type: string,
  availabilityStatus: string
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  resumeForm!: FormGroup;
  Tags: Tag[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private createRezumeService: CreateRezumeService) { }

  ngOnInit() {
    this.resumeForm = this.fb.group({
      title: [''],
      status: [''],
      sphere: [''],
      description: [''],
      links: [''],
      avatar: [''],
      achievements: [''],
      tasks: [''],
      team: [''],
      projectNews: [''],
      announcements: [''],
      creationDate: [new Date().toISOString()],
      selectedtags: [[]]
    });

    this.createRezumeService.sendtags().subscribe(
      (data: any) => {
        this.Tags = data;
      }
    );
  }

  onSubmit() {
    if (this.resumeForm.valid) {
      this.http.post('URL_TO_YOUR_BACKEND_API', this.resumeForm.value).subscribe(response => {
        console.log('Resume submitted successfully', response);
      }, error => {
        console.error('Error submitting resume', error);
      });
    }
  }
}