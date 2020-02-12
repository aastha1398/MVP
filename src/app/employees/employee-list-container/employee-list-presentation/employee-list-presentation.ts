import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employees.model';


@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css']
})
export class EmployeeListPresentationComponent implements OnInit {

  constructor() { }

  @Input() employeeData$:Observable<Employee[]>;
  @Output() deleteEvent = new EventEmitter<number>();
  //@Output() editEvent = new EventEmitter<number>();


  Delete(id:number)
  {
    this.deleteEvent.emit(id);
  }


  /**
   * 
   * @param id 
   * Edit(id: number)
  {
    this.editEvent.emit(id);
  }
   * 
   * 
   */

  ngOnInit()
   {
   }

}
