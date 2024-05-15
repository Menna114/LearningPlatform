import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { InstructorLoginComponent } from './instructor/instructor-login/instructor-login.component';
import { TestCenterRepComponent } from './testcenterrep/testcenterrep.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/dashboard/admin-dashboard.component';
import {StudentSignupComponent} from './student/student-signup/student-signup.component';
import {InstructorSignupComponent} from './instructor/instructor-signup/instructor-signup.component'


const routes: Routes = [
  { path: 'student/login', component: StudentLoginComponent },
  { path: 'instructor/login', component: InstructorLoginComponent },
  { path: 'testcenterrep/login', component: TestCenterRepComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'student/signup', component: StudentSignupComponent },
  { path: 'instructor/signup',component: InstructorSignupComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
