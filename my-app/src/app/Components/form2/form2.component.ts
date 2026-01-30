import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  registrationfrom!: FormGroup;
  constructor(){
    this.intilizeform();
  }
  intilizeform(){
    this.registrationfrom=new FormGroup({
      firstname:new FormControl('uday',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[ Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
      address: new FormGroup({
        street:new FormControl('')
      })
    },{updateOn:'blur'});
  }
  submit(registrationfrom:any){
    console.log("registrationfrom "+registrationfrom);
  }
}
