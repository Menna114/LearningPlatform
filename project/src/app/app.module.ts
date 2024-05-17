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
import {StudentSignupComponent } from './student/student-signup/student-signup.component';
import {InstructorSignupComponent} from './instructor/instructor-signup/instructor-signup.component';
import {AdmindashboardComponent} from './admin/admindashboard/admindashboard.component'
import { AppRoutingModule } from './app-routing.module';
import { InstructorDashboardComponent } from './instructor/instructor-dashboard/instructor-dashboard.component';


@NgModule({
  declarations: [
   AppComponent,
   AdminLoginComponent,
   InstructorLoginComponent,
   InstructorSignupComponent,
   TestCenterRepComponent,
   StudentLoginComponent,
   StudentSignupComponent,
   AdminLoginComponent,
   AdmindashboardComponent,
   InstructorDashboardComponent
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
