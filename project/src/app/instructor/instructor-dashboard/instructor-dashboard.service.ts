import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstructorDashboardService {

  private apiUrl = 'http://localhost:8082/api/course/instructor'; 

  constructor(private http: HttpClient) { }

  createCourse(course: any, instructorId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/${instructorId}/addCourse`, course, { headers });
  }
}
