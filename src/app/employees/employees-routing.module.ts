import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container';


const routes: Routes = [
  {
    path:'employee',
    component: EmployeeListContainerComponent
  },
  {
    path:'employee-form-container/:id',
    component: EmployeeFormContainerComponent
  },
  {
    path:'add',
    component: EmployeeFormContainerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
