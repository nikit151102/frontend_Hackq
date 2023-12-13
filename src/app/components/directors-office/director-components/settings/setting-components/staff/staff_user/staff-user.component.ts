import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staff-user',
  templateUrl: './staff-user.component.html',
  styleUrls: ['./staff-user.component.css']
})
export class StaffUserComponent {
  @Input() contentUser: {
    id: string,
    lastname: string,
    firstname: string,
    middlename: string,
    position: string,
  } = {
    id: '',
      lastname: '',
      firstname: '',
      middlename: '',
      position: '',
    };
}
