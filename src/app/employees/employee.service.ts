import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

import { Employee } from './employees.model';

@Injectable()
export class EmployeeService {

  apiUrl: string;          

  constructor(private http: HttpClient, private route: Router) 
  {
   this.apiUrl=environment.baseUrl;     //apiUrl is assingned to baseUrl from environment
  }  

  /**
   * getEmployees() is used to get all data from db.json.
   */
  public getEmployees() : Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.apiUrl}`);
  }


  /**
   * 
   * @param id get particular Id from db.json
   * deleteEmployee() is used to delete particular record  of given Id.
   * 
   */
  public deleteEmployee(id: number) : Observable<Employee>
  {
    return this.http.delete<Employee>(`${this.apiUrl}/${id}`);

  }


  /**
   * 
   * @param employee is Model with class name Employee.
   * addEmployeee() method is used to add Employee
   */
  public addEmployee(employee:Employee) : Observable<Employee>
  {
    console.log(employee);    
     return this.http.post<Employee>(`${this.apiUrl}`,employee);                
  }

  /**
   * 
   * @param id 
   * Fetch data of particular Id:
   * 
   */
  public getEmployeeById(id:number) : Observable<Employee>
  {
      return this.http.get<Employee>(`${this.apiUrl}${id}`);
  }

  /**
   * 
   * @param employee Model with class name Employee
   * @param id 
   * Edit data of given employee
   */
  public editEmployee(employee:Employee,id: number) :Observable<Employee>
  {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`,employee)
  }


  /**
   * 
   * @param employee used for searching at server side
   */
  public searchEmployee(employee : Employee) : Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.apiUrl}?q=${employee}`);
  }
  

  // sortEmployee(orderString :string): Observable<Employee[]>
  // {
  //   return this.http.get<Employee[]>(``)
  // }

}
