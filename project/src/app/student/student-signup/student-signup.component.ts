import { Component } from '@angular/core';
import { StudentSignupService } from './student-signup.service';
import { Router } from '@angular/router';

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

  constructor(private studentSignupService: StudentSignupService, private router: Router) {}

  signup(): void {
    this.studentSignupService.signup(this.name, this.email, this.pass, this.affiliation, this.bio)
      .subscribe(
        (response) => {
          console.log(response)
          if (response > 0) {
            console.log('Signup successful! Student ID:', response);
            // Set the student ID and navigate to the appropriate page
            //this.router.navigate(['/student/dashboard'], { queryParams: { id: response } });
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
