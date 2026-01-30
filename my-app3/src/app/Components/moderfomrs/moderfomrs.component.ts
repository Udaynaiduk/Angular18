import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Asyncusernamevalidator } from '../../validators/async.validator';

@Component({
  selector: 'app-moderfomrs',
  templateUrl: './moderfomrs.component.html',
  styleUrl: './moderfomrs.component.css'
})
export class ModerfomrsComponent {
  myform!: FormGroup;

  submit(){
    console.log(this.myform.value);
  }
  constructor(){
    this.myform=new FormGroup({
      user:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      address:new FormGroup({
        street:new FormControl('',Validators.required),
        City:new FormControl('',Validators.required),
        Pincode:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
      })
    })

    this.newForm=new FormGroup({
      name:new FormControl('',{
        asyncValidators: [Asyncusernamevalidator()],
        updateOn: 'blur' // optional, run async validator when input loses focus
      }), 
      skills:new FormArray([
        new FormControl('',Validators.required)
      ])
    })
  }
  get skills() {
    return this.newForm.get('skills') as FormArray;
  }
 
removeSkill(index: number) {
  this.skills.removeAt(index);
}
submit1(){
  console.log(this.newForm.value);
}
  addSkill(){
    this.skills.push(new FormControl('',Validators.required));
  }
  newForm!:FormGroup;
}
