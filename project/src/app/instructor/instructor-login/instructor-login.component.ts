import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.scss']
})
export class InstructorLoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    // Add your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Example: Send login request to server
  }
}
