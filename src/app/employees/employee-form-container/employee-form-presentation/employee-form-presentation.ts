import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EmployeeFormPresenterService } from '../employee-form-presenter';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../employees.model';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',  
  providers: [EmployeeFormPresenterService]
})
export class EmployeeFormPresentation implements OnInit {

  profileForm: FormGroup; 
  submitted= false;
  @Input() employees: Employee;
  @Output() create: EventEmitter<FormGroup>;

  constructor(private employeePresenter: EmployeeFormPresenterService)
  {
    this.create = new EventEmitter<FormGroup>();
  }
 
  ngOnInit() : void
  {
    if(this.employees)
       {
         alert("Employee Already Exists")
                 
       }
      else
      {
        this.profileForm = this.employeePresenter.create()
      }
  }

 @Input() set employee(Value: Employee)
 {
   //if value exists then will go for patchvalue 
   if(Value)
   {
    this.employees = Value;
    this.profileForm.patchValue(this.employees);
   }
 }

 get employee()
 {
   return this.employees;
 }
  
 get form()
 {
   return this.profileForm.controls;
 }

  OnSubmit()
  {
     this.submitted = true;
     this.create.emit(this.profileForm.value);
     
  }
}
