import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlighter]'
})
export class HightlighterDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') 
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'red';
}
@HostListener('mouseout') 
  onout() {
    this.el.nativeElement.style.backgroundColor = 'white';
}
}