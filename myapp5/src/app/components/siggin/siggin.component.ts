import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-siggin',
  templateUrl: './siggin.component.html',
  styleUrl: './siggin.component.css'
})
export class SigginComponent {
sigign!:FormGroup

constructor(private builder:FormBuilder){
  this.sigign=this.builder.group({
    username:[''],
    password:[''],
    confirmpassword:[''],
    address:this.builder.group({
      city:[''],
      state:[''],
      postalcode:[''],
      loction:this.builder.array([''])
    })
  })

}
getloctionarray():FormArray{
 return this.sigign.get('address.loction') as FormArray
}
remove(id:any){
    
    this.getloctionarray().removeAt(id)
}
addnewloaction(){
  this.getloctionarray().push(this.builder.control(''))
}
submit(){
  console.log(this.sigign.value);
}
}
