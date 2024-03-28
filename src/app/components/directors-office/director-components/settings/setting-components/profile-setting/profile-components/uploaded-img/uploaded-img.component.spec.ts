import { ComponentFixture, TestBed } from '@angular/core/testing';

import { uploadedImgComponent } from './uploaded-img.component';

describe('uploadedImgComponent', () => {
  let component: uploadedImgComponent;
  let fixture: ComponentFixture<uploadedImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [uploadedImgComponent]
});
    fixture = TestBed.createComponent(uploadedImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
