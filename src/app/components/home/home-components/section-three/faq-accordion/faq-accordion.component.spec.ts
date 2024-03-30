import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQAccordionComponent } from './faq-accordion.component';

describe('FAQAccordionComponent', () => {
  let component: FAQAccordionComponent;
  let fixture: ComponentFixture<FAQAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FAQAccordionComponent]
    });
    fixture = TestBed.createComponent(FAQAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
