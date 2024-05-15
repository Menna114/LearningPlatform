import { Component } from '@angular/core';
import { TestCenterRepService } from './testcenterrep.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-testcenterrep',
  templateUrl: './testcenterrep.component.html',
  styleUrls: ['./testcenterrep.component.scss']
})
export class TestCenterRepComponent {
  email: string = '';
  password: string = '';

  constructor(private testCenterRepService: TestCenterRepService, private router: Router) {}

  login(): void {
    const user = {
      Email: this.email,
      Password: this.password
    };

    this.testCenterRepService.login(this.email, this.password).subscribe(
      testCenterId => {
        const id = testCenterId;
        if (testCenterId > 0) {
          console.log('Login successful! Test Center ID:', id);
          // Redirect to test center rep dashboard or perform necessary actions
          //this.router.navigate(['/test-center-rep/dashboard']);
        } else if (testCenterId === -1) {
          console.log('Incorrect password');
        } else if (testCenterId === -2) {
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
