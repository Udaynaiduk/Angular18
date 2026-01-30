import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {
  @HostBinding ('style.color') color:string='blue';

  @HostListener('keyup', ['$event'])
  onkeyup(event:any){
   
      const pattern=/^[0-9]*$/;
      if(!pattern.test(event.target.value)){
        this.color='red';
      }
      else{
        this.color='';
      }

    
  }
  

}
