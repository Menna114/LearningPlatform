import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin-login/admin-login.component';
import { StudentComponent } from './student/student-login/student-login.component';
import { InstructorComponent }from './instructor/instructor-login/instructor-login.component';
import { TestCenterRepComponent } from './testcenterrep/testcenterrep.component';
import { AppRoutingModule } from './app-routing.modules';


@NgModule({
  declarations: [
    AdminComponent,
    StudentComponent,
    InstructorComponent,
    TestCenterRepComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
 
})
export class AppModule {
  ngDoBootstrap() {}
}
