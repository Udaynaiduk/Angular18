import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginform!:FormGroup
constructor(){
  this.loginform=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(5)]),
    password:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      zip:new FormControl('')
    }),
    skills:new FormArray([])
  })
}
getskill(): FormArray {
  return this.loginform.get('skills') as FormArray;
}
addskill(){
  this.getskill().push(new FormControl(''))
}
removeskill(i:any){
this.getskill().removeAt(i)
}
login=inject(AuthService)
errorMessage!:string
submit(){
  this.login.login(this.loginform.value)
  this.errorMessage=this.login.errorMessage
 
}

}
