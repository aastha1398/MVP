import { Injectable } from '@angular/core';
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
      employeeNames: ['',Validators.required],
      employeeEmail: ['',[Validators.required,Validators.email]],
      employeeContact: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      employeeDepartment:['',Validators.required],
      employeeCity:['',Validators.required]
      });
  }

 

}
