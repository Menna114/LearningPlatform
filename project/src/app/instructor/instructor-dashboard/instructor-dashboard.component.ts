import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InstructorDashboardService } from './instructor-dashboard.service';
import { InstructorIdService } from '../../InstructorIdService';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.scss']
})
export class InstructorDashboardComponent implements OnInit {
  courseTitle: string = '';
  courseCategory: string = '';
  courseDuration: number = 0;
  courseCapacity: number = 0;
  instructorName: string = '';
  instructorID: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instructorIdService: InstructorIdService,
    private instructorDashboardService: InstructorDashboardService
  ) {}

  ngOnInit(): void {
    this.instructorID = this.instructorIdService.getInstructorId();
    console.log('Instructor ID in ngOnInit:', this.instructorID);
  }

  createCourse(): void {
    const course = {
      title: this.courseTitle,
      category: this.courseCategory,
      duration: this.courseDuration,
      capacity: this.courseCapacity,
      instructorName: this.instructorName
    };
  
    if (this.instructorID) {
      this.instructorDashboardService.createCourse(course, this.instructorID).subscribe(
        (response: any) => {
          try {
            const jsonResponse = JSON.parse(response);
            console.log('Course created successfully:', jsonResponse);
          } catch (e) {
            console.log('Course created successfully:', response);
          }
          // Handle success, maybe navigate to a different page or show a success message
        },
        (error) => {
          console.error('Error creating course:', error);
          // Handle error, maybe show an error message to the user
        }
      );
    } else {
      console.log('Invalid instructor ID:', this.instructorID);
    }
  }
  
}
