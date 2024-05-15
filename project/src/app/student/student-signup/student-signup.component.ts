import { Component } from '@angular/core';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  affiliation: string = '';
  bio: string = '';

  constructor() {}

  signup() {
    // Add your signup logic here
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Affiliation:', this.affiliation);
    console.log('Bio:', this.bio);
    // Example: Send signup request to server
  }
}
