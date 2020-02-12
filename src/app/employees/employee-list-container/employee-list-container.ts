import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.html',
  styleUrls: ['./employee-list-container.css']
})
export class EmployeeListContainerComponent implements OnInit {

  constructor(private employee:EmployeeService) { }

  empData$ : Observable<Employee[]>

  ngOnInit()
  {
    this.empData$ = this.employee.getEmployees();
  }

  onDelete(id: number)
  {
    this.employee.deleteEmployee(id);
    this.empData$ = this.employee.getEmployees();
  }

  /**
   * 
   * @param id 
   * 
   *  onEdit(id: number)
    {
    this.employee.getId(id);
   }
   * 
   * 
   */
 
}
