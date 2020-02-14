import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder,Validators, FormGroup} from '@angular/forms';

@Injectable()
export class EmployeeFormPresenterService {

  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  
  /**
   * create() method is used to create form
   */
  create()
  {
     return this.profileForm = this.formBuilder.group
     ({
      employeeName: [''],
      employeeEmail: [''],
      employeeContact: [''],
      employeeDepartment:[''],
      employeeCity:['']
      });
  }
 

}
