import { Component } from '@angular/core';

@Component({
  selector: 'app-testcenterrep',
  templateUrl: './testcenterrep.component.html',
  styleUrls: ['./testcenterrep.component.scss']
})
export class TestCenterRepComponent {
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
