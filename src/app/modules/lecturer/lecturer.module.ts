import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerRoutingModule } from './lecturer-routing.module';
import { LecturerOutletComponent } from './components/lecturer-outlet/lecturer-outlet.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { DashboardLeturerComponent } from './components/dashboard-leturer/dashboard-leturer.component';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    LecturerOutletComponent,
    ViewReviewComponent,
    DashboardLeturerComponent
  ],
  imports: [
    CommonModule,
    LecturerRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule
  ]
})
export class LecturerModule { }
