import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstructorIdService {
  private instructorId!: number;

  setInstructorId(id: number): void {
    this.instructorId = id;
  }

  getInstructorId(): number {
    return this.instructorId;
  }
}
