import { TestBed } from '@angular/core/testing';

import { DataChartAnalyticService } from './data-chart-analytic.service';

describe('DataChartAnalyticService', () => {
  let service: DataChartAnalyticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataChartAnalyticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
