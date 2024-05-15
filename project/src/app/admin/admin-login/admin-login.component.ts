import { Component } from '@angular/core';
import { UserService } from './admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent{
  email: string='';
  password: string='';

  constructor(private userService: UserService,private router:Router) {}

  login(): void {
    this.userService.login(this.email, this.password).subscribe(
      adminId => {
        const id=adminId;
        if (adminId !== -1 && adminId !== -2 && adminId !== -3) {
         
          console.log('Login successful! Student ID:', id);
          console.log(id);
          console.log(this.email)
          console.log(this.password)
          //this.router.navigate(['/instructor/signup'],{queryParams:{id:id}});
        } else if (adminId === -1) {
        
          console.log('Incorrect password');
        } else if (adminId === -2) {
        
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
