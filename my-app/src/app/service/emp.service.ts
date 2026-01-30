import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from '../Models/Employee';


@Injectable({
  providedIn: 'root',
})
export class EmpService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees').pipe(
      catchError((error) => {
        console.error('Error fetching employees:', error);
        return throwError(() => error);
      })
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:3000/employees', employee);
  }
  deleemployee(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }
}