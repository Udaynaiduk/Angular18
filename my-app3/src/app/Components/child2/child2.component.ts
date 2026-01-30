import { Component, ElementRef, EventEmitter, Input, Output, output, Renderer2, ViewChild } from '@angular/core';
import { Employee } from '../parent/parent.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
@Output()
update=new EventEmitter();
@Output()
add=new EventEmitter();

@Input()
edit: Employee|null=null;
updateEmp(){

}
id:number=0;
name:string='';
age:number=0;
constructor(private render:Renderer2,){

}
ngOnChanges()
{
  if(this.edit){
    this.id=this.edit.id;
    this.name=this.edit.name;
    this.age=this.edit.age;
  }
}
@ViewChild('idlable')lableid!:ElementRef;
ngAfterViewInit(){
  this.render.setProperty(this.lableid.nativeElement, 'disabled', !!this.edit);//disable if edit is not null but not working readonly="edit?.id"
}

submit()
{
  const emp:Employee={id:this.id,name:this.name,age:this.age};
if(this.edit){
  this.update.emit(emp);
}
else{
  this.add.emit(emp);
}
this.edit=null;
this.id=0;
this.name='';
this.age=0;
}

}
