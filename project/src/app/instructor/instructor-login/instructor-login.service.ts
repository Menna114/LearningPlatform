import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/UserService-1.0-SNAPSHOT/api/User'; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<number> {
    const user = { email, pass: password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<number>(`${this.apiUrl}/login/instructor`, user, { headers });
  }
}