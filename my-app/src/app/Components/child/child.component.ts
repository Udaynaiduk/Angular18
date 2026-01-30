import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class ChildComponent {
@Input()
proucts:any;

ngOnChanges(){
  console.log("ngOnChanges called of child component");
}
childdata:string="Data from child component";
constructor(private cdr:ChangeDetectorRef){
  console.log("constructor called of child component");
}
ngOnInit()
{
console.log("ngOnInit called of child component");
 }
 ngDoCheck(){
  
  console.log("ngDoCheck called of child component");
 }
 @ContentChild('contentdata') content:any;
 ngAfterContentInit(){
  console.log("ngAfterContentInit called of parent component");
  this.content.nativeElement.style.background = 'yellow';
    this.content.nativeElement.style.padding = '10px';
    this.content.nativeElement.style.color = 'blue';
 }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called of child component");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called of child component");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called of child component");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called of child component");
  }
}
