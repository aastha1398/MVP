import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.html',
  styleUrls: ['./employee-list-container.css']
})
export class EmployeeListContainer implements OnInit {

  empData$ : Observable<Employee[]>;  

  constructor(private employee:EmployeeService) { }  

  ngOnInit()
  {
     this.empData$ = this.employee.getEmployees();
  }

  onDelete(id: number)
  {
    this.employee.deleteEmployee(id).subscribe();
    this.empData$ = this.employee.getEmployees();
  }

  onEdit(id: number)
  {
      this.employee.getEmployeeById(id);
  }
   
 
}
