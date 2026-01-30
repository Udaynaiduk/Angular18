import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@HostBinding ('style.backgroundColor') bgColor!:string
  constructor() { }

  @HostListener('click')
  onClick(){
    this.bgColor='#e05d17';
    
  }

}
