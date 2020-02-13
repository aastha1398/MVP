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
  employee$: Observable<Employee[]>
  
  constructor(private routes: ActivatedRoute,private employeeService: EmployeeService) { }

  ngOnInit()
  {
       /**
     *  this.id = this.routes.snapshot.params['id']
    if(this.id)
    {
      this.employeeLists$= this.employee.getData(this.id);
    }
     * 
     * 
     * 
     * 
     */  
  }

  create(employee: Employee)
  {
   
    this.employeeService.addEmployee(employee).subscribe(data=>
      {
        if(data)
        {
          alert('record inserted');
        }
      });
  }

}
