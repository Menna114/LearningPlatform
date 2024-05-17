import { Component } from '@angular/core';
import { UserService } from './student-login.service'; 
import { Router } from '@angular/router';
import { UserIdService } from '../../UserIdService';

@Component({
  selector: 'app-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router,private studenIdservice: UserIdService) {}

  login(): void {
    this.userService.login(this.email, this.password).subscribe(
      studentId => {
        const id = studentId;
        if (studentId !== -1 && studentId !== -2 && studentId !== -3) {
          console.log('Login successful! Student ID:', id);
          console.log(id);
          this.studenIdservice.setStudentId(id);
          this.router.navigateByUrl('/student/dashboard');
        } else if (studentId === -1) {
          console.log('Incorrect password');
        } else if (studentId === -2) {
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
    this.router.navigateByUrl('/student/signup');
  }
}
