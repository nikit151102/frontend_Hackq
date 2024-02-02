import { Component } from '@angular/core';
import { StaffService } from './staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
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
