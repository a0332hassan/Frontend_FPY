import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm! : FormGroup;

  constructor(private authService :  AuthService , private formBuilder : FormBuilder , private router : Router){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email : ['' , Validators.required],
      password : ['' , Validators.required],
      username : ['' , Validators.required],
      role : ['' , Validators.required]
    })
  }

  onSubmit(){
    
  }
}
