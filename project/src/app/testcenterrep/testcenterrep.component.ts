import { Component } from '@angular/core';
import { TestCenterRepService } from './testcenterrep.service'; 
import { Router } from '@angular/router';
import { UserIdService } from '../UserIdService';

@Component({
  selector: 'app-testcenterrep',
  templateUrl: './testcenterrep.component.html',
  styleUrls: ['./testcenterrep.component.scss']
})
export class TestCenterRepComponent {
  email: string = '';
  password: string = '';

  constructor(private testCenterRepService: TestCenterRepService, private router: Router,private testRepId: UserIdService) {}

  login(): void {
    const user = {
      Email: this.email,
      Password: this.password
    };

    this.testCenterRepService.login(this.email, this.password).subscribe(
      testCenterId => {
        const id = testCenterId;
        if (testCenterId > 0) {
          this.testRepId.setInstructorId(id)
          this.router.navigateByUrl('/testRep/dashboard');
          console.log('Login successful! Test Center ID:', id);
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
