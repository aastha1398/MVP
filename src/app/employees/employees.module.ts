import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation';


@NgModule({
  declarations: [EmployeeFormContainerComponent, EmployeeListContainerComponent, EmployeeFormPresentationComponent, EmployeeListPresentationComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
  ] 
})
export class EmployeesModule { }
