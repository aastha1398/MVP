import { Component, OnInit, Input } from '@angular/core';
import { EmployeeFormPresenterService } from '../employee-form-presenter';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../employees.model';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.css']
})
export class EmployeeFormPresentationComponent implements OnInit {

  constructor(private employeePresenter: EmployeeFormPresenterService ) { }

  profileForm: FormGroup;
  employeeObj: Employee;
 
  ngOnInit() {

    this.profileForm= this.employeePresenter.profileForm;
  }

  OnSubmit()
  {
    this.employeePresenter.
  }
}
