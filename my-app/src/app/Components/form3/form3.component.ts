import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  registrationfrom!: FormGroup;
  constructor(private form:FormBuilder){
    this.intilizeform();
  }
  intilizeform(){
    this.registrationfrom=this.form.group({
      firstname:new FormControl('uday',[Validators.required,Validators.minLength(3)]),
      password:new FormControl(''),
      address: new FormGroup({
        street:new FormControl('')
      }),
      skills:this.form.array([])
    },{updateOn:'blur'});
  }
  submit(registrationfrom:any){
    console.log("registrationfrom "+registrationfrom);
  }
}
