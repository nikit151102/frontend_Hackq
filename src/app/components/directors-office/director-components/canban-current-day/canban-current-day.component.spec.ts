import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanbanCurrentDayComponent } from './canban-current-daycomponent';


describe('CanbanCurrentDayComponent', () => {
  let component: CanbanCurrentDayComponent;
  let fixture: ComponentFixture<CanbanCurrentDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanbanCurrentDayComponent]
    });
    fixture = TestBed.createComponent(CanbanCurrentDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
