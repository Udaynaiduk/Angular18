import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class BindingsComponent {
name="uday"
flag:boolean=false;
f1(){
  window.alert("button clicked");
}

onchange(){
  console.log("value changed"+this.name);
}
ngmodelchanage(){
  console.log("ngmodel changed"+this.name);
}
colSpanValue=2

labelText="click";
cols=2

show=true;
shows(){
  this.show=!this.show;
}
mode=false;
modes(t:any){
  
  if(!this.mode)
    {
      document.body.style.backgroundColor = "black";
  }else{
    document.body.style.backgroundColor = "white"; 
  }
  this.mode=!this.mode;
}
msg:string="";
log(name:string){
  console.log(name);
}
selectchange(event:any){
  console.log(event.target.value);

}
}
