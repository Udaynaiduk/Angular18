import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, contentChild, ViewChild } from '@angular/core';
import * as products from '../products/products.json';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

parentproducts:any=(products as any).default;
check(){
  this.parentproducts.push({id:4,name:"Product4",price:400});
}
name:string="Angular Parent Child Communication";
ngOnChanges(){
  console.log("ngOnChanges called of parent component");
}constructor( private cdr:ChangeDetectorRef){
  console.log("constructor called of parent component");
}
ngOnInit()
{
console.log("ngOnInit called of parent component");
 }
 ngDoCheck(){
  this.cdr.markForCheck();
  console.log("ngDoCheck called of parent component");
 }
  @ContentChild('inputdata') content:any;
ngAfterContentInit(){
  console.log("ngAfterContentInit called of parent component");
}
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called of parent component");
  }
  getdata(childcomp:any){
    console.log("childcomp "+childcomp);
    console.log("childcomp after slice "+childcomp);
    

  }
  
  @ViewChild('inputdata') childcomp:any;
@ViewChild(ChildComponent) childcomp1!:ChildComponent;
  ngAfterViewInit(){
    this.childcomp.nativeElement.value="Data from parent to child using ViewChild";
    console.log("ngAfterViewInit called of parent component");
    this.childcomp1.childdata="Data from parent to child using ViewChild and Component class";
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called of parent component");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called of parent component");
  }
  parentdata:string="Data from parent component";

}
