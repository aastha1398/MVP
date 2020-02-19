import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employees.model';
import { EmployeeListPresenterService } from '../employee-list-presenter';


@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  
  providers:[EmployeeListPresenterService]
})
export class EmployeeListPresentation implements OnInit {


  @Input() employeeData$:Observable<Employee[]>;
  @Output() delete: EventEmitter<number>;
  @Output() edit: EventEmitter<number>;
  @Output() search: EventEmitter<string>; 

  
  ngOnInit(){}

  constructor() {
    this.delete = new EventEmitter<number>(); //Output event for delete function
    this.edit = new EventEmitter<number>();   //Output event for edit function
    this.search = new EventEmitter<string>(); //output event for search function
   }

  /**
   * 
   * @param id will delete a record of particular Id
   */
 public deleteEmployee(id:number): void
  {
    this.delete.emit(id);
  }

  /**
   * 
   * @param id will edit a record of given Id
   */
  public editEmployee(id: number): void
  {
    this.edit.emit(id);
  }

  /**
   * 
   * @param searchText will do search at server side.
   * 
   */
  public searchEmployee(searchText: string): void
  {
    this.search.emit(searchText);
  }
   
}
