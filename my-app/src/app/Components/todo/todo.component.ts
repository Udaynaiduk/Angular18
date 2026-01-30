import { Component } from '@angular/core';
import { Selector, Store } from '@ngrx/store';

import {  Observable } from 'rxjs';
import { addtask, deletetask } from '../ngrx/actions/todo';
import { Employee } from '../../Models/Employee';
import { EmpService } from '../../service/emp.service';
import { addemp, emp } from '../ngrx/actions/emp.action';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
todo$=new Observable<any>();
empdata: Observable<any>;
constructor(private select:Store<any>,private emp:EmpService){
  this.todo$=this.select.select('todo');
  this.empdata = this.select.select('emp');
  console.log("employee data in constructor "+ this.empdata);
 
}
empList: any = [];

ngOnInit(){
this.emp.getEmployees().subscribe((data)=>{
    console.log("employee data "+ data);
    this.empList=data;
  });
  this.select.dispatch(emp());
  this.empdata.subscribe(data => {
    console.log('Employee data from STORE:', data);
  });
}
getdata(){

  this.select.dispatch(emp());

}

addTodo(item:any){
  this.select.dispatch(addtask(item));

}
deletetodo(todo:any){
   this.select.dispatch(deletetask(todo))
}
firstName: string = '';
lastName: string = '';
id: number = 0;
addempss(emp:any){
 const Employee={
    id:this.id.toString(),
    firstName:this.firstName,
    lastName:this.lastName,
    email:"alice.johnson@example.com",
    phoneNumber: "+1-555-123-4567",
    hireDate: "2021-05-15T00:00:00Z",
    jobTitle: "Software Engineer",
    salary: 85000
}
  
this.select.dispatch(addemp({employee:Employee}))
}

}
