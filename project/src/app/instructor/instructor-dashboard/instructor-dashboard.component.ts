import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InstructorDashboardService } from './instructor-dashboard.service';
import { UserIdService } from '../../UserIdService';

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
  courseTitleToView: string = '';
  courseCategoryToView: string = '';
  courseDetails: any = null;
  coursesByCategory: any[] = [];
  coursesByRating: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instructorIdService: UserIdService,
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

  viewCourseDetails(): void {
    this.instructorDashboardService.getCourseDetails(this.courseTitleToView).subscribe(
      (response: any) => {
        this.courseDetails = response;
        console.log('Course details:', response);
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  viewCoursesByCategory(): void {
    this.instructorDashboardService.getCoursesByCategory(this.courseCategoryToView).subscribe(
      (response: any[]) => {
        this.coursesByCategory = response;
        console.log('Courses by category:', response);
      },
      (error) => {
        console.error('Error fetching courses by category:', error);
      }
    );
  }

  viewCoursesByRating(): void {
    this.instructorDashboardService.getCoursesByRating().subscribe(
      (response: any[]) => {
        this.coursesByRating = response;
        console.log('Courses by rating:', response);
      },
      (error) => {
        console.error('Error fetching courses by rating:', error);
      }
    );
  }
  
}
