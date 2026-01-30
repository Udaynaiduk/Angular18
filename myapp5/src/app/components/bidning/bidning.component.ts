import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bidning',
  templateUrl: './bidning.component.html',
  styleUrl: './bidning.component.css'
})
export class BidningComponent {

  constructor(private render:Renderer2){

  }
  name:string="uday"
  normal_mode=true
  clilck(){
    let body=document.body
if(this.normal_mode)
  {
    console.log(this.normal_mode);
    this.render.setStyle(body,'background-color','black')
   this.render.setStyle(body,'color','white')
  }
  else{
    console.log(this.normal_mode);
    this.render.setStyle(body,'background-color','white')
    this.render.setStyle(body,'color','black')

  }
this.normal_mode=!this.normal_mode
  }
  na:string="uday"
  age!:number

  show:boolean=true
  showpara(){
    this.show=!this.show
  document.getElementById('passwor')?.remove()
  }
}

