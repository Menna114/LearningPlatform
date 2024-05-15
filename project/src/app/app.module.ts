import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { InstructorLoginComponent }from './instructor/instructor-login/instructor-login.component';
import { TestCenterRepComponent } from './testcenterrep/testcenterrep.component';
import {AdminDashboardComponent } from './admin/admin-dashboard/dashboard/admin-dashboard.component';
import {StudentSignupComponent } from './student/student-signup/student-signup.component';
import {InstructorSignupComponent} from './instructor/instructor-signup/instructor-signup.component';
import { AppRoutingModule } from './app-routing.module';
import { DeleteInstructorComponent } from './admin/admin-dashboard/dashboard/delete-instructor/delete-instructor.component';
import { DeleteStudentComponent } from './admin/admin-dashboard/dashboard/delete-student/delete-student.component';
import { GenerateCreditComponent } from './admin/admin-dashboard/dashboard/generate-credit/generate-credit.component';
import { UpdateInstructorComponent } from './admin/admin-dashboard/dashboard/update-instructor/update-instructor.component';
import { UpdateStudentComponent } from './admin/admin-dashboard/dashboard/update-student/update-student.component';
import { ViewInstructorAccountComponent } from './admin/admin-dashboard/dashboard/view-instructor-account/view-instructor-account.component';
import { ViewStudentAccountComponent } from './admin/admin-dashboard/dashboard/view-student-account/view-student-account.component';
import { InsertInstructorIdComponent } from './admin/admin-dashboard/dashboard/delete-instructor/insert-instructor-id/insert-instructor-id.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    InstructorLoginComponent,
    AdminDashboardComponent,
    InstructorSignupComponent,
    StudentSignupComponent,
    TestCenterRepComponent,
    DeleteInstructorComponent,
    DeleteStudentComponent,
    GenerateCreditComponent,
    UpdateInstructorComponent,
    UpdateStudentComponent,
    ViewInstructorAccountComponent,
    ViewStudentAccountComponent,
    InsertInstructorIdComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
