import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  isLecturerLoggedIn! : boolean;
  isStudentLoggedIn! : boolean;

  setToken(token : string){
    localStorage.setItem('token' , token);
  }

  setLecturerLoggedIn(){
    this.isLecturerLoggedIn = true;
  }

  setStudentLoggedIn(){
    this.isStudentLoggedIn = true;
  }

  setLecturerLoggedOut(){
    this.isLecturerLoggedIn = false;
  }

  setStudentLoggedOut(){
    this.isStudentLoggedIn = false;
  }
  
  getToken(){
    localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }

  login(creadentials : {email : string , password : string}) : Observable<any>{
    return this.http.post("http://localhost:8000/api/v1/auth/login" , creadentials).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    )
  }

}

