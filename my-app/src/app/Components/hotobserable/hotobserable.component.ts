import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-hotobserable',
  templateUrl: './hotobserable.component.html',
  styleUrl: './hotobserable.component.css'
})
export class HotobserableComponent {
ngOnInit(){
  this.subjectdemo();
  this.startBehavior();
  this.replaysubject();
  this.asyn();
}
  subjectdemo()
  
  {
 let subject$=new Subject()
  subject$.next('hello from hot observable');
  subject$.subscribe((data)=>console.log('subscriber 1:',data));
  subject$.next('hello from hot observable 2');
  subject$.subscribe((data)=>console.log('subscriber 2:',data));
  subject$.next('hello from hot observable 3');
  }

  BehaviorSubject$=new BehaviorSubject('Initial Value');
  startBehavior()
  {
    console.log('Behavior Subject Demo');
    this.BehaviorSubject$.subscribe((data)=>console.log('Subscriber 1:',data));
    this.BehaviorSubject$.next('Hello from Behavior Subject');
    this.BehaviorSubject$.next('Hello from Behavior Subject 2');

  }
  replay$=new ReplaySubject();
  replaysubject(){
  
    this.replay$.next('Hello from Replay Subject 1');
    this.replay$.next('Hello from Replay Subject 2');
    this.replay$.subscribe((data)=>console.log('Subscriber 1:',data));
    this.replay$.next('Hello from Replay Subject 3');
    
  }
  searchtext:string='';
  search(event:any){
    console.log("event"+ event);
    this.replay$.next(event);
    this.replay$.subscribe((data)=>console.log('repaly Subscriber :',data));
  }

asyn(){
  let sa$=new AsyncSubject();
  sa$.next('Hello from Async Subject 1');
  sa$.next('Hello from Async Subject 2');
  sa$.subscribe((data)=>console.log('Async Subscriber 1:',data));
  sa$.next('Hello from Async Subject 3');
}
}
