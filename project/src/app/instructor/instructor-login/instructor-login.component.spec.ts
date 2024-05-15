import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InstructorLoginComponent } from './instructor-login.component'

describe('InstructorLoginComponent', () => {
  let component: InstructorLoginComponent;
  let fixture: ComponentFixture<InstructorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorLoginComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty username and password initially', () => {
    expect(component.email).toEqual('');
    expect(component.password).toEqual('');
  });

  it('should call login method when login button is clicked', () => {
    spyOn(component, 'login');
    const loginButton = fixture.nativeElement.querySelector('button[type="submit"]');
    loginButton.click();
    expect(component.login).toHaveBeenCalled();
  });
});
