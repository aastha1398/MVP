import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeFormPresentation } from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [EmployeeFormContainer, 
                 EmployeeListContainer,
                 EmployeeFormPresentation,
                 EmployeeListPresentation],
  
  imports: [CommonModule,
            EmployeesRoutingModule,
            ReactiveFormsModule],

  providers:[EmployeeService]
})
export class EmployeesModule { }
