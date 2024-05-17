import { Component } from '@angular/core';
import { StudentSignupService } from './student-signup.service';
import { Router } from '@angular/router';
import { UserIdService } from '../../UserIdService';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent {
  name: string = '';
  email: string = '';
  pass: string = '';
  affiliation: string = '';
  bio: string = '';

  constructor(private studentSignupService: StudentSignupService, private router: Router, private studenIdservice: UserIdService) {}

  signup(): void {
    this.studentSignupService.signup(this.name, this.email, this.pass,this.bio, this.affiliation)
      .subscribe(
        (response) => {
          console.log(response);
          if (response > 0) {
            console.log('Signup successful! Student ID:', response);
            this.studenIdservice.setInstructorId(response); // Make sure this is setting the correct ID type
            this.router.navigateByUrl('/student/dashboard');
          } else if (response === -1) {
            console.log('Signup failed: Student already exists');
          } else if (response === -2) {
            console.log('Signup failed: Database error');
          } else {
            console.log('Signup failed: Unknown error');
          }
        },
        error => {
          console.error('An error occurred during signup:', error);
        }
      );
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.pass = '';
    this.affiliation = '';
    this.bio = '';
  }
}
