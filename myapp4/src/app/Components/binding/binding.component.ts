import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
constructor(private cdr:ChangeDetectorRef){

}
ngDoCheck(){
  this.cdr.detectChanges();
}
  name:string="uday"
  countries:string[]=['India','USA','UK','Canada','Australia']
    selectcountry=''
  slecechange(event:any){
   
    
  }
  selectChangec(event:any){
    
  }
  keyup(event:any){
    
  }

}
