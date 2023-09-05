import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerRoutingModule } from './lecturer-routing.module';
import { LecturerOutletComponent } from './components/lecturer-outlet/lecturer-outlet.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { DashboardLeturerComponent } from './components/dashboard-leturer/dashboard-leturer.component';


@NgModule({
  declarations: [
    LecturerOutletComponent,
    ViewReviewComponent,
    DashboardLeturerComponent
  ],
  imports: [
    CommonModule,
    LecturerRoutingModule
  ]
})
export class LecturerModule { }
