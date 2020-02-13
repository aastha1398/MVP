import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder,Validators, FormGroup} from '@angular/forms';

@Injectable()
export class EmployeeFormPresenterService {

  profileForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  
  create()
  {
     return this.profileForm = this.fb.group
     ({
      employeeName: [''],
      employeeEmail: [''],
      employeeContact: [''],
      employeeDepartment:[''],
      employeeCity:['']
      });
  }
 

}
