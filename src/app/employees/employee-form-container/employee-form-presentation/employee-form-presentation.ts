import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { EmployeeFormPresenterService } from '../employee-form-presenter';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../employees.model';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.css'],
  providers: [EmployeeFormPresenterService]
})
export class EmployeeFormPresentation implements OnInit {

  profileForm: FormGroup; 

  @Input() employees: Employee;
  @Output() createEvent = new EventEmitter<FormGroup>();

  constructor(private employeePresenter: EmployeeFormPresenterService) { }
 
  ngOnInit() : void
  {

    if(this.employees)
       {
         debugger;
           this.profileForm= this.employeePresenter.create()
           alert("Employee Already Exists")
          console.log(this.employees)           
       }
      else
      {
        this.profileForm = this.employeePresenter.create()
      }
  }

 @Input() set employee(Value: Employee)
 {
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
  
  OnSubmit()
  {
    this.createEvent.emit(this.profileForm.value);
    console.log(this.createEvent);
  }
}
