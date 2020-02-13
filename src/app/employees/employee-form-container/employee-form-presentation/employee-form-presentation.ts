import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  employee: Employee;

  @Output() createEvent = new EventEmitter<FormGroup>();

  constructor(private employeePresenter: EmployeeFormPresenterService) { }
  ngOnInit() : void
  {
    this.profileForm= this.employeePresenter.create()
   }

  ngOnChanges(): void
  {


      // if(this.employee)
      // {
      //   this.profileForm= this.employeePresenter.create()
      //   alert("Employee Already Exists")
      //   //console.log(this.employee)
      //   //this.profileForm.patchValue(this.employee)
      // }
      // else
      // {
        
      // }
  }
  OnSubmit()
  {
    debugger;
    this.createEvent.emit(this.profileForm.value);
    console.log(this.createEvent)
  }
}
