import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListContainerComponent } from './employees/employee-list-container/employee-list-container';
import { EmployeeFormContainerComponent } from './employees/employee-form-container/employee-form-container';


const routes: Routes = [

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
