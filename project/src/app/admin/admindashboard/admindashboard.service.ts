import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  private apiUrl = 'http://localhost:8080/UserService-1.0-SNAPSHOT/api/admin';
  private apiUrl2 = 'http://localhost:8082/api/course/admin'; 
  constructor(private http: HttpClient) { }

  generateCredentials(): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<boolean>(`${this.apiUrl}/generateCredentials`, null, { headers });
  }

  viewStudentAccount(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/viewStudentAccount/${id}`);
  }
  viewInstructorAccount(id:number):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiUrl}/viewInstructorAccount/${id}`);
  }
  deleteInstructorAccount(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<string>(`${this.apiUrl}/deleteInstructorAccount/${id}`);
  }

  deleteStudentAccount(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<string>(`${this.apiUrl}/deleteStudentAccount/${id}`);
  }

  updateStudentName(id: number, newName: string): Observable<string> {
    const url = `${this.apiUrl}/updateStudentName/${id}/${newName}`;
    return this.http.put<string>(url, '', { responseType: 'text' as 'json' });
  }
  
  updateInstructorName(id: number, newName: string): Observable<string> {
    const url = `${this.apiUrl}/updateInstructorName/${id}/${newName}`;
    return this.http.put<string>(url, '', { responseType: 'text' as 'json' });
  }

  rejectCourse(title: string): Observable<string> {
    const params = new HttpParams().set('title', title);
    return this.http.put<string>(`${this.apiUrl2}/rejectCourseToBePublished`, null, { params });
  }

  acceptCourse(title: string): Observable<string> {
    const params = new HttpParams().set('title', title);
    return this.http.put<string>(`${this.apiUrl2}/acceptCourseToBePublished`, null, { params });
  }

  editCourse(title: string, capacity: number): Observable<string> {
    const params = new HttpParams().set('title', title).set('capacity', capacity.toString());
    return this.http.put<string>(`${this.apiUrl2}/editCourseCapacity`, null, { params });
  }

  removeCourse(title: string) {
    const params = new HttpParams().set('title', title);
    return this.http.delete(`${this.apiUrl2}/removeCourseByTitle`, { params, responseType: 'text' });
  }

}
