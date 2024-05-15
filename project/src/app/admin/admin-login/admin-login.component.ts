import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor() {}

  login() {
    // Add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Example: Send login request to server
  }
}
