import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, concatMap, delay, from, interval, map, mergeMap, Observable, of, ReplaySubject, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-obserables',
  templateUrl: './obserables.component.html',
  styleUrl: './obserables.component.css'
})
export class ObserablesComponent {

  constructor() {
    this.obserable$.subscribe((data)=>{
      console.log(data);
    })
    this.asyncSub();
    this.rsSub();
    this.bsSub();
    this.switch();
    this.concat();
    this.sub();
    //this.interval();
    this.of();
    this.from();
    //this.interval();
    this.mergemap();
    console.log("Subscription to observable is done.");
   }
 
  obserable$=new Observable<string>((provider)=>{
    provider.next("First Data Emitted");
    provider.next("Second Data Emitted");
    provider.next("Third Data Emitted");
    provider.closed=true;
    provider.next("Fourth Data Emitted");
    provider.add(() => {
      console.log("Observable execution completed.");
    });
  })
  of(){
    let array=[1,2,3,4,5];
   let ofobserable$=of(...array);
    ofobserable$.subscribe((data)=>{
      console.log("Of Observable data: " + data);
    })
  }
  from(){
    let array=[10,20,30,40,50];
    let fromobserable$=from(array);
      fromobserable$.subscribe((data)=>{
        console.log("From Observable data: " + data);
      })
  }
  date: Date = new Date(Date.now());
  interval(){
    
    interval(1000).subscribe(val => {
      this.date = new Date(Date.now());
    });
  }
 mergemap(){
  let array=[1,2,3];
  let source$=from(array).pipe(mergeMap((data: any) => {
    return of(data * 2);
  }));
  source$.subscribe((data)=>{
    console.log("MergeMap data: " + data);
  })
 }

 employees:any[]=[{id:1,name:'uday',age:24},{id:2,name:'kiran',age:25},{id:3,name:'raju',age:26}];
 emp$:any[]=[];
 concat(){
  from(this.employees)
  .pipe(
    concatMap(emp =>
      of(emp).pipe(delay(1000)).pipe(
        map(data => ({
          ...data,
          Uname: data.name.toUpperCase(),
          time: new Date(new Date().getTime()).toLocaleTimeString()
        }))
      )
    )
  )
  .subscribe(data => {
    console.log("concate ", data);
   this.emp$.push(data);
  });

 }

switchs:any[]=[];
 switch(){
  from(this.employees)
  .pipe(
    switchMap(emp=>
      of(emp).pipe(delay(2000))
      .pipe(
        map(data=>({
          ...data,
          Uname:data.name.toUpperCase(),
          time:new Date(new Date().getTime()).toLocaleTimeString()
  }))))).subscribe(data=>{
    console.log("switch ",data);
    this.switchs.push(data);
  })
 }

 subject=new Subject<any>()
 sub(){
  this.subject.next("Hello from Subject");  
  this.subject.next("Another message from Subject");
  this.subject.subscribe(data=>{
    console.log("Subject data: " + data);
  })
  this.subject.next("Message after subscription");
 }
  
 BehaviorSubject=new BehaviorSubject<string>("Initial Value");
  bsSub(){
    
    this.BehaviorSubject.subscribe(data=>{
      console.log("BehaviorSubject data: " + data);
    })
    
    this.BehaviorSubject.next("first BehaviorSubject Value");
  }
  ReplaySubject=new ReplaySubject<string>();
  rsSub(){
 
    this.ReplaySubject.next("First ReplaySubject Value");
    this.ReplaySubject.next("Second ReplaySubject Value");
    this.ReplaySubject.subscribe(data=>{
      console.log("ReplaySubject data: " + data);
    })
    this.ReplaySubject.next("Third ReplaySubject Value");
  }
  AsyncSubject$=new AsyncSubject<string>();
  asyncSub(){
    this.AsyncSubject$.next("First AsyncSubject Value");
    this.AsyncSubject$.next("Second AsyncSubject Value");
    this.AsyncSubject$.subscribe(data=>{
      console.log("AsyncSubject data: " + data);
    })
    this.AsyncSubject$.next("Third AsyncSubject Value");
    this.AsyncSubject$.complete();
  }

}
