import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentOutletComponent } from './components/student-outlet/student-outlet.component';
import { AddReviewComponent } from './components/add-review/add-review.component';


@NgModule({
  declarations: [
    StudentOutletComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
