import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {
@HostBinding('style.color')mycolor:string='';
  constructor() { }
@HostListener('keyup', ['$event'])

handleKeyUp(value: any): void {
  let regex=new RegExp('^[0-9]*$');
  if(!regex.test(value.target.value)){
    this.mycolor='red';
    window.alert("only numbers are allowed");    
}
else{
  this.mycolor='black';
}
}
}
