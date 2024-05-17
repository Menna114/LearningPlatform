import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorDashboardService {

  private apiUrl = 'http://localhost:8082/api/course';

  constructor(private http: HttpClient) { }

  createCourse(course: any, instructorId: number): Observable<string> {
    const url = `${this.apiUrl}/instructor/${instructorId}/addCourse`;
    return this.http.post(url, course, { responseType: 'text' });
  }
}
