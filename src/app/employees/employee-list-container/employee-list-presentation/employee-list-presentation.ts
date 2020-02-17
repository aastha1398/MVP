import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employees.model';
import { EmployeeListPresenterService } from '../employee-list-presenter';


@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css'],
  providers:[EmployeeListPresenterService]
})
export class EmployeeListPresentation implements OnInit {


  @Input() employeeData$:Observable<Employee[]>;
  @Output() delete = new EventEmitter<number>(); //Output event for delete function
  @Output() edit = new EventEmitter<number>();   //Output event for edit function
  @Output() search = new EventEmitter<string>(); //output event for search function

  
  ngOnInit(){}
  constructor() { }

  /**
   * 
   * @param id will delete a record of particular Id
   */
  deleteEmployee(id:number)
  {
    this.delete.emit(id);
  }

  /**
   * 
   * @param id will edit a record of given Id
   */
  editEmployee(id: number)
  {
    this.edit.emit(id);
  }


  /**
   * 
   * @param searchText will
   * 
   */
  searchEmployee(searchText: string)
  {
    this.search.emit(searchText);
  }
   
}
