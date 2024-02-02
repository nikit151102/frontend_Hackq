import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent {

  @Input() CurrentUser: any = [];
  userForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['CurrentUser'] && changes['CurrentUser'].currentValue) {
      this.setCurrentUserData();
    }
  }
  
  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.userForm.disable();
    this.setCurrentUserData()
  }

  setCurrentUserData() {
    console.log("this.CurrentUser",this.CurrentUser)
    if (this.CurrentUser) {
    this.userForm.patchValue({
      firstName: this.CurrentUser.FirstName,
      lastName: this.CurrentUser.LastName,
      middleName: this.CurrentUser.MiddleName || '',
      phoneNumber: this.CurrentUser.Phone,
      email: this.CurrentUser.Email
    });
  }
  }

  resetUserForm() {
    console.log("resetUserForm")
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.userForm.enable();
    } else {
      this.userForm.disable();
    }
  }

}
