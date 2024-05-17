import { Component } from '@angular/core';
import { UserService } from './instructor-login.service';
import { Router } from '@angular/router';
import { UserIdService } from '../../UserIdService';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.scss']
})
export class InstructorLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router, private instructorIdService: UserIdService) {}

  login(): void {
    this.userService.login(this.email, this.password).subscribe(
      (response: number) => {
        if (response > 0) {
          console.log('Login successful! Instructor ID:', response);
          this.instructorIdService.setInstructorId(response);
          this.router.navigateByUrl('/instructor/dashboard');
        } else if (response === -1) {
          console.log('Incorrect password');
        } else if (response === -2) {
          console.log('User not found');
        } else {
          console.log('Database error');
        }
      },
      error => {
        console.error('An error occurred:', error);
      }
    );
  }

  navigateToSignup(): void {
    this.router.navigateByUrl('/instructor/signup');
  }
}
