import { Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css',
  // speific to this css not apply anything from main css encapsulation:ViewEncapsulation.ShadowDom
  // default encapsulation:ViewEncapsulation.Emulated
  // apply to all other componetsencapsulation:ViewEncapsulation.None
})
export class BindingsComponent {


  interpolation:string="Hello from Interpolation Binding!"
  name:string|undefined
  name1:string|null=null
  nam2!:string
  firstname:string|null=null
  constructor(private  ren:Renderer2,private ele:ElementRef){

  }
  @ViewChild('temp1',{static:true}) tempvar1!: ElementRef;
  ngOnInit(){
    console.log(this.name+" "+this.name1+" "+this.nam2)
    this.tempvar1.nativeElement.innerHTML="Hello form ngOnint"
    //getting  error undefined  beacuse static is false console.log("static false "+this.tempvar.nativeElement.textContent)
   
  }
  ngAfterViewInit(){
    this.log()
  }
  @ViewChild('nolimt') nolimt!:ElementRef;
  @ViewChild('temp') tempvar!: ElementRef;//default static false
 
  log(){
    console.log(this.tempvar.nativeElement.textContent)
    this.tempvar.nativeElement.textContent="Welcome to Angular!"
    this.ren.addClass(this.tempvar.nativeElement,'center');

  }
  age:number|null=null;
}
