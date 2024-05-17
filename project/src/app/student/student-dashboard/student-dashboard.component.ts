import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { StudentDashboardService } from './student-dashboard.service';
import { UserIdService } from '../../UserIdService';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

courseTitle: any;
reviewText: any;
rate: any;
viewNotifications() {
throw new Error('Method not implemented.');
}
cancelEnrollments() {
throw new Error('Method not implemented.');
}
viewEnrollments() {
throw new Error('Method not implemented.');
}
  studentId: number | null = null;
  courseTitleToView: string = '';
  courseCategoryToView: string = '';
  courseDetails: any = null;
  coursesByCategory: any[] = [];
  coursesByRating: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIdService,
    private studentDashboardService: StudentDashboardService
  ) {}

  ngOnInit(): void {
    this.studentId = this.userIdService.getStudentId();
    console.log('Student ID in ngOnInit:', this.studentId);
  }

  viewCourseDetails(): void {
    this.studentDashboardService.getCourseDetails(this.courseTitleToView).subscribe(
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
    this.studentDashboardService.getCoursesByCategory(this.courseCategoryToView).subscribe(
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
    this.studentDashboardService.getSortedCoursesByRating().subscribe(
      (response: any[]) => {
        this.coursesByRating = response;
        console.log('Courses sorted by rating:', response);
      },
      (error) => {
        console.error('Error fetching courses sorted by rating:', error);
      }
    );
  }
  
  makeReview() {
    throw new Error('Method not implemented.');
    }
}

