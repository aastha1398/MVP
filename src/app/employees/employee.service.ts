import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employees.model';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private route: Router) {}
  apiUrl= environment.baseUrl;

  getEmployees() : Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.apiUrl}`);
  }

  deleteEmployee(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`).subscribe();
  }

  getId(id:number)
  {
    this.route.navigate(['./employee-form-container', id]);
  }
  getData(id: number): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee)
  {
    return this.http.post<Employee>(`${this.apiUrl}`,employee)
  }

}
