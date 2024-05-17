import { Component } from '@angular/core';
import { InstructorSignupService } from './instructor-signup.service';
import { Router } from '@angular/router';
import { UserIdService } from '../../UserIdService';


@Component({
  selector: 'app-instructor-signup',
  templateUrl: './instructor-signup.component.html',
  styleUrls: ['./instructor-signup.component.scss']
})
export class InstructorSignupComponent {
  name: string = '';
  email: string = '';
  pass: string = '';
  yearsOfExperience: number = 0;
  bio: string = '';
  affiliation: string = '';
 

  constructor(private instructorSignupService: InstructorSignupService, private router: Router,private instructorIdService: UserIdService) {}

  signup(): void {
    this.instructorSignupService.signup(this.name, this.email, this.pass, this.yearsOfExperience, this.bio, this.affiliation)
      .subscribe(
        response => {
          const id=response
          if (response > 0) {
            console.log('Signup successful! Instructor ID:', id);
            this.instructorIdService.setInstructorId(response);
            this.router.navigateByUrl('/instructor/dashboard');
          } else {
            
            console.log('Signup failed');
          }
        },
        error => {
          console.error('An error occurred during signup:', error);
        }
      );
  }
}
