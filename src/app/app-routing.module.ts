import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : 'login' , component : LoginComponent} , 
  {path : 'register' , component : RegisterComponent},
  {path : "" , redirectTo : '/login' , pathMatch : 'full'},
  {path : 'lecturer' , loadChildren : () => import('./modules/lecturer/lecturer.module').then((m)=>m.LecturerModule) } ,
  {path : 'student' , loadChildren : () => import('./modules/student/student.module').then((m)=>m.StudentModule) } ,
  {path : '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
