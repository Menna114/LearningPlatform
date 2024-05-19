import { Component } from '@angular/core';
import { AdminService } from './admindashboard.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'] // Fixed styleUrl to styleUrls
})
export class AdmindashboardComponent {
  studentId: any;
  instructorId: any;
  studentIdToDelete: any;
  instructorIdToDelete: any;
  newStudentName: any;
  studentIdToUpdate: any;
  newInstructorName: any;
  viewStudentResult: any; // Changed type to any temporarily
  viewInstructorResult: any;
  instructorIdToUpdate:any;
courseTitleToRemove: any;
courseTitleToReject: any;
courseTitleToAccept: any;
courseTitleToEdit: any;
courseNewCapacity: any;

  constructor(private AdminService: AdminService, private router: Router) {}

  viewStudent(): void {
    this.AdminService.viewStudentAccount(this.studentId).subscribe(
      (response: any) => {
        this.viewStudentResult = response; 
      },
      (error) => {
        console.error('An error occurred:', error);
        // Handle error
      }
    );
  }

  viewInstructor(): void {
    this.AdminService.viewInstructorAccount(this.instructorId).subscribe(
      (response: any) => {
        this.viewInstructorResult = response;
      },
      (error) => {
        console.error('An error occurred:', error);
        // Handle error
      }
    );
  }  

  generateCredentials(): void {
    this.AdminService.generateCredentials().subscribe(
      (response) => {
        if (response) {
          console.log('Credentials generated successfully.');
          // Handle success
        } else {
          console.log('Failed to generate credentials.');
          // Handle failure
        }
      },
      (error) => {
        console.error('An error occurred:', error);
        // Handle error
      }
    );
  }

  deleteInstructor(): void {
    this.AdminService.deleteInstructorAccount(this.instructorIdToDelete).subscribe(
      (response: string) => {
        console.log(response);
        // Reset the instructorIdToDelete after successful deletion
        this.instructorIdToDelete = '';
      },
      (error) => {
        // Check if the error is an HttpErrorResponse and if the status is not 200 OK
        if (error instanceof HttpErrorResponse && error.status !== 200) {
          console.error('An error occurred:', error);
          // Handle error
        } else {
          // Successful response treated as an error
          console.log('Delete operation completed successfully.');
        }
      }
    );
  }
  
  deleteStudent(): void {
    this.AdminService.deleteStudentAccount(this.studentIdToDelete).subscribe(
      (response: string) => {
        console.log(response);
        // Reset the studentIdToDelete after successful deletion
        this.studentIdToDelete = '';
      },
      (error) => {
        // Check if the error is an HttpErrorResponse and if the status is not 200 OK
        if (error instanceof HttpErrorResponse && error.status !== 200) {
          console.error('An error occurred:', error);
          // Handle error
        } else {
          // Successful response treated as an error
          console.log('Delete operation completed successfully.');
        }
      }
    );
  }
  updateStudent(): void {
    this.AdminService.updateStudentName(this.studentIdToUpdate, this.newStudentName).subscribe(
      (response: string) => {
        console.log(response);
        // Handle success
        // Optionally, reset input fields or perform other actions
      },
      (error) => {
        console.error('An error occurred:', error);
        // Handle error
      }
    );
  }
  
  updateInstructor(): void {
    this.AdminService.updateInstructorName(this.instructorIdToUpdate, this.newInstructorName).subscribe(
      (response: string) => {
        console.log(response);
        // Handle success
        // Optionally, reset input fields or perform other actions
      },
      (error) => {
        console.error('An error occurred:', error);
        // Handle error
      }
    );
  }
  rejectCourse(title: string) {
    this.AdminService.rejectCourse(title).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  acceptCourse(title: string) {
    this.AdminService.acceptCourse(title).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  editCourse(title: string, capacity: number) {
    this.AdminService.editCourse(title, capacity).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  removeCourse(title: string) {
    this.AdminService.removeCourse(title).subscribe(
      response => {
        console.log('Course removed successfully:', response);
      },
      error => {
        console.error('Error removing course:', error);
      }
    );
  }
  
}
