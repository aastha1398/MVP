import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employees.model';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable()
export class EmployeeService {

  apiUrl: string;

  constructor(private http: HttpClient, private route: Router) 
  {
   this.apiUrl=environment.baseUrl;
  }
  
  getEmployees() : Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.apiUrl}`);
  }

  deleteEmployee(id: number) : Observable<Employee>
  {
    return this.http.delete<Employee>(`${this.apiUrl}/${id}`);
  }

  addEmployee(employee:Employee) : Observable<Employee>
  {
    return this.http.post<Employee>(`${this.apiUrl}`,employee);                
  }


  getId(id:number)
  {
    this.route.navigate(['./employee-form-container', id]);
  }
  getData(id: number): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.apiUrl);
  }

}
