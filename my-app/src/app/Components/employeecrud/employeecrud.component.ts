import { Component } from '@angular/core';
import * as employees from '../directives/users.json';
@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.css'
})
export class EmployeecrudComponent {
Employees:any=(employees as any).default;

ademp(emp:any){
  this.Employees.push(emp);
}
delete(empid:any){
  console.log(empid);
 var id=this.Employees.findIndex((emp:any)=>emp.id===empid);
 console.log(id);
  if(id==-1){
    alert("Employee Not Found");
  }
  else{
    this.Employees.splice(id, 1)
  }
}

updateEmp(event:any){
  let id=this.Employees.findIndex((emp:any)=>emp.id===event.id);
  console.log(id);
  if(id==-1){
    alert("Employee Not Found");
  }
  else{
    this.Employees[id]=event;
  }
}
editData:any;

edit(empdata:any)
{
  let id=this.Employees.findIndex((emp:any)=>emp.id===empdata);
  console.log(id);
  if(id==-1)
  {
    alert("Employee Not Found");
  }
  else
  {
    this.editData=this.Employees[id];
  }
}

}
