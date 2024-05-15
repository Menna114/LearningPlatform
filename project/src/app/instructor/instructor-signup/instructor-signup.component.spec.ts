import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructorSignupComponent } from './instructor-signup.component';

describe('InstructorSignupComponent', () => {
  let component: InstructorSignupComponent;
  let fixture: ComponentFixture<InstructorSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases as needed
});
