import { Component } from '@angular/core';
import { UserService } from './instructor-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.scss']
})
export class InstructorLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login():void  {
    this.userService.login(this.email, this.password).subscribe(
      (instructorId: number) => {
        const id=instructorId
        if (instructorId > 0) {
          console.log('Login successful! Instructor ID:', instructorId);
          console.log(id)
          console.log(this.email)
          console.log(this.password)
          //this.router.navigate(['/instructor/dashboard']);
        } else if (instructorId === -1) {
          console.log('Incorrect password');
        } else if (instructorId === -2) {
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
}
