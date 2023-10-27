import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecctComponent } from './connecct.component';

describe('ConnecctComponent', () => {
  let component: ConnecctComponent;
  let fixture: ComponentFixture<ConnecctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnecctComponent]
    });
    fixture = TestBed.createComponent(ConnecctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
