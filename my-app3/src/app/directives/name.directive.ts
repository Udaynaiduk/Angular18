import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appName]'
})
export class NameDirective {

  constructor(private ele:ElementRef, private render:Renderer2) { }

  @HostListener('mouseenter', [])
  mouseenter() {
    let name:string=this.ele.nativeElement.innerText;
    if(name.startsWith('u')){
   this.render.setStyle(this.ele.nativeElement, 'background-color', 'lightblue');
  }
}
  @HostListener('mouseleave', [])
  mouseleave() {
    this.render.setStyle(this.ele.nativeElement, 'background-color', '');
  
}

}
