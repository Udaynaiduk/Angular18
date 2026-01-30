import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-addemployeee',
  templateUrl: './addemployeee.component.html',
  styleUrl: './addemployeee.component.css'
})
export class AddemployeeeComponent implements OnChanges {

  @Input() editData: any = null;

  @Output() addEmp = new EventEmitter();
  @Output() updateEmp = new EventEmitter();

  id: number = 0;
  name: string = "";
  salary: number = 0;
  age: number = 0;

  // PREFILL FORM WHEN EDIT DATA COMES
  ngOnChanges() {
    if (this.editData) {
      this.id = this.editData.id;
      this.name = this.editData.name;
      this.salary = this.editData.salary;
      this.age = this.editData.age;
    }
  }

  addEmployee() {
    const empdata = {
      id: this.id,
      name: this.name,
      salary: this.salary,
      age: this.age
    };

    if (this.editData) {
      this.updateEmp.emit(empdata);
      this.editData = null;
    } else {
      this.addEmp.emit(empdata);
    }

    // Clear form after submission
    this.id = 0;
    this.name = "";
    this.salary = 0;
    this.age = 0;
  }
}
