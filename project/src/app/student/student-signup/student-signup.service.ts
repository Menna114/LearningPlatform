import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentSignupService {

  private apiUrl = 'http://localhost:8080/UserService-1.0-SNAPSHOT/api/User';

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, password: string, affiliation: string, bio: string): Observable<any> {
    const user = { Name: name, Email: email, pass: password, Affiliation: affiliation, Bio: bio };
    console.log('Request payload:', user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post<number>(`${this.apiUrl}/signin/student`, user);
  }
}
