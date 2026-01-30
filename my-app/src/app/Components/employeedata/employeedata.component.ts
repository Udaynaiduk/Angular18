import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrl: './employeedata.component.css'
})
export class EmployeedataComponent {
  @Input()
  empdata:any;
  track(index:number,empdata:any){
    return empdata.id;
  }


  @Output() editEmp=new EventEmitter();
  onEdit(empdata:any){
    this.editEmp.emit(empdata);
  }

  @Output()
  Event_emiter=new EventEmitter();
  delete(empdata:any){
    console.log(empdata);
    this.Event_emiter.emit(empdata);
  }
}
