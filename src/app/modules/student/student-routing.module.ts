import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentOutletComponent } from './components/student-outlet/student-outlet.component';
import { AddReviewComponent } from './components/add-review/add-review.component';

const routes: Routes = [
  { path : '' , component : StudentOutletComponent , children : [
    { path: 'dashboard' , component : AddReviewComponent} ,
    { path : '' , redirectTo : '/student/dashboard' , pathMatch : 'full'} , 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
