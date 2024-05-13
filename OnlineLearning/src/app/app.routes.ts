import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';

export const routes: Routes = [];

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule{}
