import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';

import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeFormContainer } from './employee-form-container/employee-form-container';


const routes: Routes = [
 
  {
    path:'employee',
    component: EmployeeListContainer
  },
  {
    path:'edit/:id',
    component: EmployeeFormContainer
  },
  {
    path:'add',
    component: EmployeeFormContainer
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
