import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-signup',
  templateUrl: './instructor-signup.component.html',
  styleUrls: ['./instructor-signup.component.scss']
})
export class InstructorSignupComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  affiliation: string = '';
  experience: number = 0;
  bio: string = '';

  constructor() {}

  signup() {
    // Add your signup logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Name:', this.name);
    console.log('Affiliation:', this.affiliation);
    console.log('Experience:', this.experience);
    console.log('Bio:', this.bio);
    // Example: Send signup request to server
  }
}
