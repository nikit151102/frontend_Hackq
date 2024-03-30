import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPointsComponent } from './about-us-points.component';

describe('AboutUsPointsComponent', () => {
  let component: AboutUsPointsComponent;
  let fixture: ComponentFixture<AboutUsPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsPointsComponent]
    });
    fixture = TestBed.createComponent(AboutUsPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
