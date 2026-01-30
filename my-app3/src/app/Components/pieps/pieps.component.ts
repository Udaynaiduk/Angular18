import { Component } from '@angular/core';

@Component({
  selector: 'app-pieps',
  templateUrl: './pieps.component.html',
  styleUrl: './pieps.component.css'
})
export class PiepsComponent {
  ngOnInit(){
    this.log();
  }
Date:Date=new Date();
dob!:Date
Dates:Date=new Date('2023-06-15T09:30:00');
 NRCValue:string='NRC220314CR';
 timeStamp: number = Date.now();

 log(){
  console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');

 }

}
