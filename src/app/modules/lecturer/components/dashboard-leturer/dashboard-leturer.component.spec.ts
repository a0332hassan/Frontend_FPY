import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeturerComponent } from './dashboard-leturer.component';

describe('DashboardLeturerComponent', () => {
  let component: DashboardLeturerComponent;
  let fixture: ComponentFixture<DashboardLeturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardLeturerComponent]
    });
    fixture = TestBed.createComponent(DashboardLeturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
