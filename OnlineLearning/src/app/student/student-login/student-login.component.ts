import { Component } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentComponent {
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
