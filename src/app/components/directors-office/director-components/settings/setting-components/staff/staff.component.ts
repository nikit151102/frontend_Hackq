import { Component } from '@angular/core';
import { StaffService } from './staff.service';
import { StaffUserComponent } from './staff_user/staff-user.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css'],
    standalone: true,
    imports: [NgFor, StaffUserComponent]
})
export class StaffComponent {
  
  constructor(private staffService: StaffService,
){}

  DataUsers: any[] = [];

  ngOnInit(): void {
    this.staffService.getDataUsers().subscribe(
      response => {
        console.log('DataUsers', response);
        this.DataUsers = response;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }


  
}
