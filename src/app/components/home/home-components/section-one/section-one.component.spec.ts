import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionONEComponent } from './section-one.component';

describe('SectionONEComponent', () => {
  let component: SectionONEComponent;
  let fixture: ComponentFixture<SectionONEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionONEComponent]
    });
    fixture = TestBed.createComponent(SectionONEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
