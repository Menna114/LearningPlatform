import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {

  private apiUrl = 'http://localhost:8082/api/course/student';
  private apiUrl2= 'http://localhost:8082/api/course';

  constructor(private http: HttpClient) { }

  addReview(studentId: number, title: string, review: any): Observable<string> {
    const url = `${this.apiUrl}/${studentId}/addReview?title=${title}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<string>(url, review, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getCourseDetails(courseTitleToView: string): Observable<any> {
    const url = `${this.apiUrl2}/showCourseByTitle?title=${courseTitleToView}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  getCoursesByCategory(courseCategoryToView: string): Observable<any[]> {
    const url = `${this.apiUrl2}/showCourseByCategory?category=${courseCategoryToView}`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getSortedCoursesByRating(): Observable<any[]> {
    const url = `${this.apiUrl2}/sortedCoursesByRating`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
