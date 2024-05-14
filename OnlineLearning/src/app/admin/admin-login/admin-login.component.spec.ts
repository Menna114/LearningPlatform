import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin-login.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [FormsModule] // Import FormsModule here
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values for username and password as empty strings', () => {
    expect(component.username).toEqual('');
    expect(component.password).toEqual('');
  });

  it('should update username and password when input values change', () => {
    const usernameInput = fixture.nativeElement.querySelector('#username');
    const passwordInput = fixture.nativeElement.querySelector('#password');

    usernameInput.value = 'admin';
    passwordInput.value = 'password';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.username).toEqual('admin');
    expect(component.password).toEqual('password');
  });

  it('should call login method when login button is clicked', () => {
    spyOn(component, 'login');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.login).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
