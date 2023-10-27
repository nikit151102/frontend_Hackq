import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewApplicationComponent } from './dialog-new-application.component';

describe('DialogNewApplicationComponent', () => {
  let component: DialogNewApplicationComponent;
  let fixture: ComponentFixture<DialogNewApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNewApplicationComponent]
    });
    fixture = TestBed.createComponent(DialogNewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
