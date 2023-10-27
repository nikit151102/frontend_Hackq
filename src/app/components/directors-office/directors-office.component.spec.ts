import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsOfficeComponent } from './directors-office.component';

describe('DirectorsOfficeComponent', () => {
  let component: DirectorsOfficeComponent;
  let fixture: ComponentFixture<DirectorsOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorsOfficeComponent]
    });
    fixture = TestBed.createComponent(DirectorsOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
