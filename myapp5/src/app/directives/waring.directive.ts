import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appWaring]'
})
export class WaringDirective {
@HostBinding ('style.background-color') colortext:string='null'
  constructor() { 


  }

  @HostListener('input', ['$event']) onKeyup(event: any) {
    
    let value=event.target.value;
    let validation=/^[0-9]+$/;
    console.log(value);
    if( validation.test(value)){
      this.colortext='green'

    }
    else{
      this.colortext='red'
    }
    if(value==''){
      this.colortext='null'
    }
    
  }


}
