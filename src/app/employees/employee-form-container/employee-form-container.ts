import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.css']
})
export class EmployeeFormContainerComponent implements OnInit {

  id: number;
  employeeLists$: Observable<Employee[]>
  constructor(private routes: ActivatedRoute,private employee: EmployeeService) { }

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

}
