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

  constructor() { }

  @Input() employeeData$:Observable<Employee[]>;
  @Output() deleteEvent = new EventEmitter<number>(); //Output event for delete function
  @Output() editEvent = new EventEmitter<number>();   //Output event for edit function

  ngOnInit(){}


  /**
   * 
   * @param id 
   */
  delete(id:number)
  {
    this.deleteEvent.emit(id);
  }

  /**
   * 
   * @param id 
   */
    edit(id: number)
  {
    this.editEvent.emit(id);
  }


}
