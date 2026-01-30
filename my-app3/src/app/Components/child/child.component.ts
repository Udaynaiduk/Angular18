import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Employee } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input()
empData:Employee[]|undefined;
ngDocheck(){
  console.log("Child component checked");
}
trackByUser(id:any,item:any){
  return item.id;
}
@Output()
Edit:any=new EventEmitter();
@Output()
Delete:any=new EventEmitter();

edit(emp:any){
 this.Edit.emit(emp);
}

delete(emp:any)
{
  this.Delete.emit(emp);
}



}