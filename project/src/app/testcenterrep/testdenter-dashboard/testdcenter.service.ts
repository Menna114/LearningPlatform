import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestCenterService {
  private apiUrl = 'http://localhost:8083/api/testCenter/center';
  private apiUrl2 = 'http://localhost:8083/api/testCenter/exam';

  constructor(private http: HttpClient) {}

  addTestCenter(repID: string, testCenter: any): Observable<string> {
    const url = `${this.apiUrl}/${repID}/addCenter`;
    return this.http.post<string>(url, testCenter, { responseType: 'text' as 'json' });
  }

  updateTestCenter(centerId: string, updatedCenter: any): Observable<any> {
    const url = `${this.apiUrl}/${centerId}/updateInfo`;
    return this.http.put(url, updatedCenter);
  }

  searchTestCenters(location: string): Observable<any[]> {
    const url = `${this.apiUrl}/searchTestCenters?location=${location}`;
    return this.http.get<any[]>(url);
  }
  createExam(exam: any): Observable<any> {
    const url = `${this.apiUrl2}/createExam`;
    return this.http.post(url, exam);
  }
  
}
