import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorSignupService {

  private apiUrl = 'http://localhost:8080/UserService-1.0-SNAPSHOT/api/User';

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, pass: string, yearsOfExperience: number, bio: string, affiliation: string): Observable<any> {
    const instructor = { name: name, email: email, pass: pass, yearsOfExperience: yearsOfExperience, bio: bio, affiliation: affiliation };
    console.log('Request payload:', instructor);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<number>(`${this.apiUrl}/signin/instructor`, instructor);
  }
}
