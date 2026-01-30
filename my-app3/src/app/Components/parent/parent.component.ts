import { Component, input, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { Child4Component } from '../child4/child4.component';

export type Employee = {
  id: number;
  name: string;
  age: number;
};

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  Editemp: Employee | null = null;
employees: Employee[] = [{id:1,name:'uday',age:24},
                         {id:2,name:'kiran',age:25},
                         {id:3,name:'raju',age:26}
                        ];

editemp(emp:Employee)
{
  this.Editemp=this.employees.find(e=>e.id==emp.id) || null;

}
ngDoCheck()
{
  console.log("Parent component checked");
}
  deletemp(event:Employee)
  {
   let id=this.employees.findIndex(e=>e.id==event.id);
   if(id!==-1){
    this.employees.splice(id,1);
   }
  }

  addemp(emp:Employee){
this.employees.push(emp);
  }
  updateemp(emp:Employee){
    let index=this.employees.findIndex(e=>e.id==emp.id);
    if(index!==-1){
      this.employees[index]=emp;
    }
    this.Editemp=null;
  }



  employee = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ];

    // Mutates the object (won’t trigger OnPush update)
    changeAge() {
      this.employee[0].age += 1;
    }
  
    // Replaces the object (triggers OnPush update)
    replaceEmployee() {
      this.employee[0] = { ...this.employees[0], age: this.employees[0].age + 1 };
    }

    @ViewChild('container',{read:ViewContainerRef})container!:ViewContainerRef;
    loadComponent(){
     const ref= this.container.createComponent(Child4Component);
      ref.instance.user=this.employee[0];
    }
}
