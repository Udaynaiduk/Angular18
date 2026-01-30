import { Component } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  myform!:FormGroup
  constructor(){
    this.myform=new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      skills: new FormArray([
        new FormControl(''),
      ])
    })
  }

  addnewskill(){
    (this.myform.get('skills') as FormArray).push(new FormControl(''))
  }

  getskillss():FormArray{
    return this.myform.get('skills') as FormArray;
  }
removeskill(id:any){
  this.getskillss().removeAt(id);
}

sumbit(){
  console.log(this.myform.value);
}
}
