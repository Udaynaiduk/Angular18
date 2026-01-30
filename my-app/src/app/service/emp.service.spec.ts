import { TestBed } from '@angular/core/testing';

import { EmpService } from './emp.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Employee } from '../Models/Employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('EmpService', () => {
  let service: EmpService;
  let httpmock:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[],
      providers:[EmpService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EmpService);
    httpmock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpmock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch employees', () => {

    let mockemo:Employee[]=[
      {id:'1', firstName:'Jane Smith',lastName:'Doe' ,email:'asd',phoneNumber:'12345',hireDate: 'string', jobTitle: 'string',salary: 1234 },
      {id:'2', firstName:'Jane Smith',lastName:'Doe' ,email:'asd',phoneNumber:'12345',hireDate: 'string', jobTitle: 'string',salary: 1234 }
    ];
    service.getEmployees().subscribe((emp) => {
       expect(emp).toEqual(mockemo);
       expect(emp.length).toBe(2);
    });

    const rq = httpmock.expectOne('http://localhost:3000/employees');
    expect(rq.request.method).toBe('GET');
    rq.flush(mockemo);
   
  }),
  it('should add emp',()=>{
    let mockemo:Employee={id:'1', 
                          firstName:'Jane Smith',
                          lastName:'Doe' ,
                          email:'asd',
                          phoneNumber:'12345',
                          hireDate: 'string', 
                          jobTitle: 'string',
                          salary: 1234 };
    service.addEmployee(mockemo).subscribe((emp)=>{
      expect(emp).toEqual(mockemo);
    })
    const re=httpmock.expectOne('http://localhost:3000/employees');
    expect(re.request.method).toBe('POST');
    expect(re.request.body).toEqual(mockemo);
    re.flush(mockemo);
  });

  it('should delete emp',()=>{
    let id=1;

    service.deleemployee(id).subscribe((res)=>{
      expect(res).toBeNull();
    });
    const req=httpmock.expectOne(`http://localhost:3000/employees/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);

  });

  it('should handle error on getEmployees', () => {
    
    service.getEmployees().subscribe({
      next: () => fail('should have failed with the 500 error'),
      error: (error) => {
        expect(error.status).toBe(500);
      },
      complete: () => { fail('should not complete')
  }});
  const http=httpmock.expectOne('http://localhost:3000/employees');
  expect(http.request.method).toBe('GET');

  http.flush('Error fetching employees', {status:500, statusText:'Server Error'});

  });
});
