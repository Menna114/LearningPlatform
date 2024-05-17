// instructor-id.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstructorIdService {
  private instructorId: number | null = null;

  constructor() {}

  getInstructorId(): number | null {
    return this.instructorId;
  }

  setInstructorId(id: number): void {
    this.instructorId = id;
  }

  clearInstructorId(): void {
    this.instructorId = null;
  }
}
