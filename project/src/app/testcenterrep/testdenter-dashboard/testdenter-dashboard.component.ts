import { Component, OnInit } from '@angular/core';
import { TestCenterService } from './testdcenter.service';
import { UserIdService } from '../../UserIdService';

@Component({
  selector: 'app-testdenter-dashboard',
  templateUrl: './testdenter-dashboard.component.html',
  styleUrls: ['./testdenter-dashboard.component.scss']
})
export class TestdenterDashboardComponent implements OnInit {
  exam: any = {
    name : '',
    duration : '',
    date : '',
    time : '',
    grades : '',
    testCenter : '',
    branchName : '',
  }

  testCenter: any = {
    name: '',
    bio: '',
    branches: [
      {
        name: '',
        address: '',
        location: '',
        dates: [
          {
            date: '',
            time: '',
            status: true,
            capacity: 0
          }
        ]
      }
    ]
  };

  testCenterUpdate: any = {
    name: '',
    bio: '',
    branches: [
      {
        name: '',
        address: '',
        location: '',
        dates: [
          {
            date: '',
            time: '',
            status: true,
            capacity: 0
          }
        ]
      }
    ]
  };
  testcenterId: number | null = null;
  errorMessage: string | null = null;
  searchResults: any;
  searchPerformed: any;
  searchLocation: any;

  constructor(private testCenterService: TestCenterService, private userIdService: UserIdService) {}

  ngOnInit(): void {
    this.testcenterId = this.userIdService.getTestRepId();
    console.log('Test Center ID in ngOnInit:', this.testcenterId);
  }

  addBranch() {
    this.testCenter.branches.push({
      name: '',
      address: '',
      location: '',
      dates: [
        {
          date: '',
          time: '',
          status: true,
          capacity: 0
        }
      ]
    });
  }

  removeBranch(index: number) {
    this.testCenter.branches.splice(index, 1);
  }

  addDate(branchIndex: number) {
    this.testCenter.branches[branchIndex].dates.push({
      date: '',
      time: '',
      status: true,
      capacity: 0
    });
  }

  removeDate(branchIndex: number, dateIndex: number) {
    this.testCenter.branches[branchIndex].dates.splice(dateIndex, 1);
  }

  addTestCenter() {
    if (this.testCenter.name && this.testCenter.bio && this.testcenterId !== null) {
      this.errorMessage = null; // Reset error message
      this.testCenterService.addTestCenter(this.testcenterId.toString(), this.testCenter)
        .subscribe(
          response => {
            console.log('Center added successfully:', response);
            // Reset form
            this.testCenter = {
              name: '',
              bio: '',
              branches: [
                {
                  name: '',
                  address: '',
                  location: '',
                  dates: [
                    {
                      date: '',
                      time: '',
                      status: true,
                      capacity: 0
                    }
                  ]
                }
              ]
            };
          },
          error => {
            console.error('Error adding center:', error);
            this.errorMessage = 'Failed to add center. Please try again.'; // Set error message
          }
        );
    } else {
      console.error('Test Center ID is null or form is invalid');
      this.errorMessage = 'Invalid form data. Please fill in all required fields.'; // Set error message
    }
  }

  createExam() {
    if (this.exam) {
      this.testCenterService.createExam(this.exam).subscribe(
        response => {
          console.log('Exam created successfully:', response);
          this.exam = {}; // Reset exam form
        },
        error => {
          console.error('Error creating exam:', error);
          // Optionally, handle the error and display an error message.
        }
      );
    } else {
      console.error('Exam data is invalid');
      // Optionally, handle the case where the form is invalid.
    }
  }

  searchTestCenters() {
    this.testCenterService.searchTestCenters(this.searchLocation)
      .subscribe(
        results => {
          this.searchResults = results;
          this.searchPerformed = true;
        },
        error => {
          console.error('Error searching test centers:', error);
        }
      );
  }

  updateTestCenter() {
    // Call the service to update the test center
    this.testCenterService.updateTestCenter('centerId', this.testCenter)
      .subscribe(
        response => {
          console.log('Test center updated successfully:', response);
          // Reset form or perform any other actions
        },
        error => {
          console.error('Error updating test center:', error);
          // Handle error, display error message, etc.
        }
      );
  }
}
