import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeeeComponent } from './addemployeee.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

describe('AddemployeeeComponent', () => {
  let component: AddemployeeeComponent;
  let fixture: ComponentFixture<AddemployeeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddemployeeeComponent],
      imports:[FormsModule,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddemployeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should prefill form when editData is provided',()=>{
    const empdata = {
      id: 1,
      name: "uday",
      salary: 10000,
      age: 25
    };
    fixture.componentRef.setInput('editData', empdata);
    fixture.detectChanges();
    expect(component.id).toBe(1);
    expect(component.name).toBe("uday");
    expect(component.salary).toBe(10000);
    expect(component.age).toBe(25);

  });

  it('should emit updateEmp with prefilled data', async () => {
    const empdata = {
      id: 1,
      name: 'uday',
      salary: 10000,
      age: 25
    };

    fixture.componentRef.setInput('editData', empdata);
    fixture.detectChanges();
    await fixture.whenStable();
  // ✅ ASSERT PREFILL FIRST
    const compiled = fixture.nativeElement as HTMLElement;
    const nameInput = compiled.querySelector('input[type="text"]') as HTMLInputElement;
    expect(nameInput.value).toBe('uday');
  
    spyOn(component.updateEmp, 'emit');
    component.addEmployee();
    expect(component.updateEmp.emit).toHaveBeenCalledWith(empdata);
  });

  it('should emit addEmp when editData is null',()=>{
    const empdata = {
      id: 2,
      name: "john",
      salary: 15000,
      age: 30
    };
    spyOn(component.addEmp,"emit");
    component.editData = null;
    //act
    component.id = empdata.id;
    component.name = empdata.name;
    component.salary = empdata.salary;
    component.age = empdata.age;
    component.addEmployee();
    //assert
    expect(component.addEmp.emit).toHaveBeenCalledWith(empdata);
  });
  it('should lable id',()=>{
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toContain('Id');
});
it('should lable name',()=>{
  let compiled = fixture.nativeElement as HTMLElement;
  const labels = Array.from(compiled.querySelectorAll('label')).map(label => label.textContent);
  expect(labels).toContain('Name');
});

});
