import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder,Validators, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormPresenterService {

  constructor(private fb: FormBuilder) {}

  profileForm: FormGroup = this.fb.group({
    employeeName: ['',Validators.required],
    employeeEmail: ['',[Validators.required,Validators.email]],
    employeeContact: ['',[Validators.required,Validators.maxLength(10)]],
    employeeDepartment:['', Validators.required],
    employeeCity:['']
     });

}
