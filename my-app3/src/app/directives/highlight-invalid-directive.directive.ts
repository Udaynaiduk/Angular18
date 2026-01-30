import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appHighlightInvalidDirective]'
})
export class HighlightInvalidDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) {}

  @HostListener('blur') onBlur() {
    if (this.control.invalid && this.control.touched) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }

}
