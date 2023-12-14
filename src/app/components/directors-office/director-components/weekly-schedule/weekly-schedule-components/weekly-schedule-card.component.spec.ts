import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySchedulCardComponent } from './weekly-schedule-card.component';

describe('WeeklyScheduleComponent', () => {
  let component: WeeklySchedulCardComponent;
  let fixture: ComponentFixture<WeeklySchedulCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklySchedulCardComponent]
    });
    fixture = TestBed.createComponent(WeeklySchedulCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
