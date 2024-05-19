import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdsComponent } from './ords.component';

describe('OrdsComponent', () => {
  let component: OrdsComponent;
  let fixture: ComponentFixture<OrdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdsComponent]
    });
    fixture = TestBed.createComponent(OrdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
