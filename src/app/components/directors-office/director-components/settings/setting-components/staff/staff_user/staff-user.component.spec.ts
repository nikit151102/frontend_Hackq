import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffUserComponent } from './staff-user.component';

describe('StaffComponent', () => {
  let component: StaffUserComponent;
  let fixture: ComponentFixture<StaffUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [StaffUserComponent]
});
    fixture = TestBed.createComponent(StaffUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
