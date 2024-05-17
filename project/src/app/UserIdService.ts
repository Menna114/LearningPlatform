import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {
  private instructorId: number | null = null;
  private studentId: number | null = null;
  private testCenterId:number |null=null;

  constructor() {}

  // Instructor ID Methods
  getInstructorId(): number | null {
    return this.instructorId;
  }

  setInstructorId(id: number): void {
    this.instructorId = id;
  }

  clearInstructorId(): void {
    this.instructorId = null;
  }

  // Student ID Methods
  getStudentId(): number | null {
    return this.studentId;
  }

  setStudentId(id: number): void {
    this.studentId = id;
  }

  clearStudentId(): void {
    this.studentId = null;
  }
  getTestRepId(): number | null {
    return this.studentId;
  }

  setTestRepId(id: number): void {
    this.studentId = id;
  }

  clearTestRepId(): void {
    this.studentId = null;
  }
}
