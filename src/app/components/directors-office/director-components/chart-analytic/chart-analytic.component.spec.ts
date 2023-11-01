import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAnalyticComponent} from './chart-analytic.component';

describe('ChartAnalyticComponent', () => {
  let component: ChartAnalyticComponent;
  let fixture: ComponentFixture<ChartAnalyticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAnalyticComponent]
    });
    fixture = TestBed.createComponent(ChartAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
