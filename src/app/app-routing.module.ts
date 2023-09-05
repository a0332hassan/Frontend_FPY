import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { lecturerAuthGuard } from './guards/lecturer-auth.guard';
import { studentAuthGuard } from './guards/student-auth.guard';

const routes: Routes = [
  {path : 'login' , component : LoginComponent} , 
  {path : 'register' , component : RegisterComponent},
  {path : "" , redirectTo : '/login' , pathMatch : 'full'},
  {path : 'lecturer' , loadChildren : () => import('./modules/lecturer/lecturer.module').then((m)=>m.LecturerModule) , canActivate : [lecturerAuthGuard] } ,
  {path : 'student' , loadChildren : () => import('./modules/student/student.module').then((m)=>m.StudentModule) , canActivate : [studentAuthGuard] } ,
  {path : '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
