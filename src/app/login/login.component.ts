import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;

  constructor(private authService :  AuthService , private formBuilder : FormBuilder , private router : Router){}

  ngOnInit(): void {

    if(localStorage.getItem('token')){
      this.authService.setLecturerLoggedIn();
      this.router.navigate(['/lecturer/dashboard'])
    }

    this.loginForm = this.formBuilder.group({
      email : ['' , Validators.required],
      password : ['' , Validators.required]
    })

  }

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          this.authService.setToken(response.token);
          if(response.role == 'lecturer'){
            this.authService.setLecturerLoggedIn();
            this.router.navigate(['/lecturer/dashboard']);
          }else{
            this.authService.setStudentLoggedIn();
            this.router.navigate(['/student/dashboard']);
          }
        }
      )
    }else{
      console.log('Not Valid');
    }
  }

}


