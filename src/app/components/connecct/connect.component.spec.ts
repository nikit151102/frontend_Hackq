import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectComponent } from './connect.component';

describe('ConnecctComponent', () => {
  let component: ConnectComponent;
  let fixture: ComponentFixture<ConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ConnectComponent]
});
    fixture = TestBed.createComponent(ConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
