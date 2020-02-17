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
    //Fetch Data from db.json.
     this.empData$ = this.employee.getEmployees();
  }

  deleteEmployee(id: number) 
  {
    //Delete Employee of particular Id.
    this.employee.deleteEmployee(id).subscribe();
    this.empData$ = this.employee.getEmployees();
  }

  editEmployee(id: number)
  {
     // Edit employee of particular Id.
      this.employee.getEmployeeById(id);
  }

  searchEmployee(searchText)
  {
    //Search employee.
    this.empData$ = this.employee.searchEmployee(searchText);
  }

 
}
