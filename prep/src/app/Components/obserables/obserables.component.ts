import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Console } from 'console';
import { BehaviorSubject, concatMap, delay, exhaustMap, filter, forkJoin, from, map, mergeMap, Observable, of, Subject, switchMap, take, toArray } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Models/Product.model';

@Component({
  selector: 'app-obserables',
  templateUrl: './obserables.component.html',
  styleUrl: './obserables.component.css'
})
export class ObserablesComponent {
  private platformId = inject(PLATFORM_ID);
  public time$ = new Observable<string>();

 
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.time$ = new Observable<string>((observer) => {
        setInterval(() => {
          const currentTime = new Date().toLocaleTimeString();
          observer.next(currentTime);
        }, 1000);
      });
    }
     this.of();
    this.fliter();
    this.fork();
    this.meragemap();
    this.concate();
    this.switchmap();
    this.exhust();

    this.subject();
    this.behaviorSubject();
  }

  fliter(){
    const cars=['BMW','Audi','Ferrari','Ford','Fiat'];
    let obserables = from(cars).pipe(
      filter(car => car.startsWith('F')),
      take(1),
      map(car => {
        return { id: 1, name: car };
      })
    );

    obserables.subscribe((car: { id: number; name: string }) => {
      console.log(car.id);
    });

  }
  of(){
    let ofobserable=of(1,2,34,100).pipe(map((val:any)=> val*10),filter(val=>val>10),take(2));
    ofobserable.subscribe((res:any)=>{
      console.log(res);
    });
  }

  fork(){
    let off=of(1,2,3);
    let froms=from([10,20,30]);
    forkJoin([off,froms]).subscribe(([res1,res2])=>{
      console.log("Forx "+ res1, res2);
    })
    forkJoin(
      [off.pipe(toArray()),froms.pipe(toArray())]).subscribe(([res1,res2])=>{
        console.log("Fork with toArray "+ res1, res2);
      })

  }
  product=inject(ProductService);
  product$ =new Observable<Product[]>;
  meragemap(){
    let strignids="1,2,3,4,5"
    let strignarray=strignids.split(',');
    this.product$ =from(strignarray).pipe(
     
      mergeMap((id:any) => this.product.getbyid(id,'test','ObserablesComponent')),
      toArray()
    ).pipe(
      mergeMap(products => 
        new Observable<Product[]>(observer => {
          setInterval(() => observer.next(products), 10000);
        })
      )
    );
  }

concatprod=new Observable<Product[]>;
  concate(){
    let product=inject(ProductService);
    let strignids="1,2,3,4,5"
    let strignarray=strignids.split(',');
    this.concatprod=from(strignarray).pipe(
      concatMap((id:any)=>
         this.product.getbyid(id,'test','ObserablesComponent')),toArray())
    
  }
switchprod=new Observable<Product[]>;
  switchmap(){
    let ids="1,2,3,4,5"
    let idarray=ids.split(',');
    this.switchprod=from(idarray).pipe(
      switchMap((id:any)=> this.product.getbyid(id,'test','ObserablesComponent')),toArray()
    )
  }
exhasut=new Observable<Product[]>;
  exhust(){
    let ids=['1','2','3','4','5'];
    this.exhasut=from(ids).pipe(
      delay(1000),
      exhaustMap((id:any)=> this.product.getbyid(id,'test','ObserablesComponent')),
      toArray()
    )
  }
subject$=new Subject<number>();
subjectob=this.subject$.asObservable();
subject(){
  this.subject$.next(1);
  
  this.subject$.next(2);
  this.subject$.next(3);
  
  this.subject$.next(5);
  console.log("Subject completed");
}
behaviorSubject$=new BehaviorSubject<number>(0);
behaviorSubjectob=this.behaviorSubject$.asObservable();
behaviorSubject(){
  this.behaviorSubject$.next(1);
  
  this.behaviorSubject$.next(2);
  this.behaviorSubject$.next(3);
  
  this.behaviorSubject$.next(5);
  console.log("Behavior Subject completed");
}
replaySubject=new BehaviorSubject<number>(0);
replaySubjectob=this.replaySubject.asObservable();
replaySubjectFunc(){
  this.replaySubject.next(1);
  
  this.replaySubject.next(2);
  this.replaySubject.next(3);
  
  this.replaySubject.next(5);
  console.log("Replay Subject completed");
}

}
