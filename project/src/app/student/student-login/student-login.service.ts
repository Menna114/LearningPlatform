import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {
  private apiUrl = 'http://localhost:8080/login/student'; 

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<number> {
    const requestBody = { email, pass: password };
    return this.http.post<number>(this.apiUrl, requestBody).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        return throwError('Login failed. Please try again.'); 
      })
    );
  }
}
