import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentSignupService {

  private apiUrl = 'http://localhost:8080/UserService-1.0-SNAPSHOT/api/User';

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, pass: string,bio: string, affiliation: string): Observable<any> {
    const user = { name: name, email: email, pass: pass,bio: bio, affiliation: affiliation };
    console.log('Request payload:', user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post<number>(`${this.apiUrl}/signin/student`, user, { headers })
      
  }

}
