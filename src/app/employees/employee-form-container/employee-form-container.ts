import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employees.model';
import { FormGroup } from '@angular/forms';
import { EmployeeFormPresenterService } from './employee-form-presenter';

@Component({
  selector: 'app-employee-form-container-ui',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.css'],
  
})
export class EmployeeFormContainer implements OnInit {

  id: number;
  employee$: Observable<Employee>
 
  constructor(private routes: ActivatedRoute,private employeeService: EmployeeService) {}
 
  ngOnInit()
  {

      this.id = this.routes.snapshot.params['id'];  //get Id
      if(this.id){
      this.employee$ = this.employeeService.getEmployeeById(Number(this.id)); //get data of particular Id
      }
  }

  

  create(employee: Employee)
  {   
    //if id exists then execute editEmployee else addEmployee()
    debugger;
    if(this.id)
    {
      this.employeeService.editEmployee(employee,this.id).subscribe()
    }
    else
    {
      this.employeeService.addEmployee(employee).subscribe(data=>
        {
          if(data)
          {
            debugger
            alert('record inserted');

          }
        });      
     }
  }
}
