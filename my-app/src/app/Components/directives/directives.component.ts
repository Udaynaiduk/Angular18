import { Component } from '@angular/core';
import * as data  from './users.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  today: Date = new Date();
dob: Date = new Date();
age: number = 0;
day="monday";
checkeligiblity() {
  const diff = this.today.getFullYear() - new Date(this.dob).getFullYear();
  const monthDiff = this.today.getMonth() - new Date(this.dob).getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && this.today.getDate() < new Date(this.dob).getDate())) {
    this.age = diff - 1;
  } 
  
  this.age = Math.floor(diff);
}
num1=0;
num2=0;
result=0;
op:string="";
opr:string[]=["+","-","*","/"];
calculate(){
  switch(this.op){
    case "+":
      this.result=this.num1+this.num2;
      break;
    case "-":
      this.result=this.num1-this.num2;
      break;
    case "*":
      this.result=this.num1*this.num2;
      break;
    case "/":
      this.result=this.num1/this.num2;
      break;
  }
}

Emp=[ {'name':'uday','age':24,'city':'hyd'},
{'name':'ravi','age':26,'city':'bangalore'},
{'name':'raju','age':25,'city':'chennai'},
{'name':'kiran','age':27,'city':'pune'}
]

addEmp(a:any,b:string,c:string){
  this.Emp.push({'name':b,'age':a,'city':c});
}
track(index:number,emp:any){
  return emp.name;
}
ngstyles:number=0;

ngstylescolor={'color':'black'};

ngfuntion(){
  return this.ngstylescolor;
}

users:any=(data as any).default;
names(name:string){
  const lower = name.toLowerCase();

  if (lower.startsWith('l')) {
    return 'bg-warning';  // highlight if name starts with L
  }
  return '';
}
}
