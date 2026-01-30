import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName, NgForm } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

  sigingForm!:FormGroup;
  countries:string[]=['USA','UK','CANADA','INDIA','AUSTRALIA'];
  ngOnInit(){
    this.sigingForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl(''),
      addresses: new FormArray([
        this.createAddress()
      ])
    })
  }
 // Create a new address FormGroup
 createAddress(): FormGroup {
  return new FormGroup({
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(this.countries[0])
  });
}
  get addresses() {
    return this.sigingForm.get('addresses') as FormArray;
  }
  addaddress(){
    this.addresses.push(
      new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl('')
      })
    )
  }
  remove(index:number){
    this.addresses.removeAt(index);
  }

  //
  // Submit form
  onSubmit() {
    console.log(this.sigingForm.value);
  }
}

