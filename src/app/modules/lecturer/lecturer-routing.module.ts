import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturerOutletComponent } from './components/lecturer-outlet/lecturer-outlet.component';
import { DashboardLeturerComponent } from './components/dashboard-leturer/dashboard-leturer.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';

const routes: Routes = [
  { path: "" , component : LecturerOutletComponent , children : [
    { path : 'dashboard' , component : DashboardLeturerComponent} , 
    { path : '' , redirectTo : '/lecturer/dashboard' , pathMatch : 'full'} , 
    { path : 'reviews' , component : ViewReviewComponent} 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
