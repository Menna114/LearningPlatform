import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student-login/student-login.component';
import { InstructorComponent } from './instructor/instructor-login/instructor-login.component'
import { TestCenterRepComponent } from './testcenterrep/testcenterrep.component'
import { AdminComponent } from './admin/admin-login/admin-login.component';


export const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'instructor', component: InstructorComponent },
  { path: 'testcenterrep', component: TestCenterRepComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    exports:[RouterModule],
})
export class AppRoutingModule{}
