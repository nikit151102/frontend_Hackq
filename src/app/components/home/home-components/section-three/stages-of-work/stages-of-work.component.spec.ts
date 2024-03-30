import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesOfWorkComponent } from './stages-of-work.component';

describe('StagesOfWorkComponent', () => {
  let component: StagesOfWorkComponent;
  let fixture: ComponentFixture<StagesOfWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagesOfWorkComponent]
    });
    fixture = TestBed.createComponent(StagesOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
