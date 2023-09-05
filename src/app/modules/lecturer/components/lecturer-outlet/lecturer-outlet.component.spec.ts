import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerOutletComponent } from './lecturer-outlet.component';

describe('LecturerOutletComponent', () => {
  let component: LecturerOutletComponent;
  let fixture: ComponentFixture<LecturerOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LecturerOutletComponent]
    });
    fixture = TestBed.createComponent(LecturerOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
