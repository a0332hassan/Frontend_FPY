import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOutletComponent } from './student-outlet.component';

describe('StudentOutletComponent', () => {
  let component: StudentOutletComponent;
  let fixture: ComponentFixture<StudentOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentOutletComponent]
    });
    fixture = TestBed.createComponent(StudentOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
