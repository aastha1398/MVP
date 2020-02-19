import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.html',
 
})
export class EmployeeListContainer implements OnInit {

  empData$ : Observable<Employee[]>;
  
  constructor(private employee:EmployeeService) { }  

  ngOnInit()
  {
    //Fetch Data from db.json.
     this.empData$ = this.employee.getEmployees();
  }

  public deleteEmployee(id: number): void
  {
    //Delete Employee of particular Id.
    this.employee.deleteEmployee(id).subscribe(
      data=>{
          alert("Record Deleted");
      }
    );
   
  }

  public editEmployee(id: number): void
  {
     // Edit employee of particular Id.
      this.employee.getEmployeeById(id);
  }

  public searchEmployee(searchText): void
  {
    //Search employee.
    this.empData$ = this.employee.searchEmployee(searchText);
  }

 
}
