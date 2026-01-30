import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
user={
  firstname:'uday',
  lastname:'komineedi',
  address:{
    street:'anaasarao nagar',
    city:'naa',
    state:'aandhra pradesh'
  }
}
  submitform(value:any){
    console.log(value.firstname)
    console.log(value);
  }
  reset(myform:any){
    myform.reset();
  }
}
