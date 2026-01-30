import { Component, computed, effect, signal, Signal,WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

num:Signal<number>=signal(0);
names: WritableSignal<string> = signal("Angular");
increment(){
  this.names.set("React");
}

nums:WritableSignal<number>=signal(0);
muted:Signal<number>=computed(()=>this.nums()*this.nums())

squre(){
  this.nums.update(n=>n+1);
}
count:WritableSignal<number>=signal(0);
addcart(){
  this.count.update(c=>c+1);
}
private efer=effect(()=>{
  console.log("cart updated"+this.count());
})
}
