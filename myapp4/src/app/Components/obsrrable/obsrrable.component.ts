import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, concatMap, exhaustMap, from, map, mergeAll, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-obsrrable',
  standalone: true,
  imports: [],
  templateUrl: './obsrrable.component.html',
  styleUrl: './obsrrable.component.css'
})
export class ObsrrableComponent {

constructor(private http:HttpClient){
  this.bhevipuraldata();
  this.form();
  this.of();
  this.meragemap();
  this.concatmap();
  this.switchmap();
  this.exahsut();
}

bheavipural$=new BehaviorSubject<number>(0);
bhevipuraldata(){
  this.bheavipural$.subscribe(res=>{
    console.log('behavioral subject data'+res);
  });
  this.bheavipural$.next(1);
  this.bheavipural$.next(2);
  this.bheavipural$.next(3);
}
form(){
  let cars=['bmw','audi','ford','honda'];
  let obserableofcar=from(cars);
  obserableofcar.subscribe(car=>{
    console.log('form'+car);
  }) 
}

of(){
  let numbers=of(1,3,5);
  numbers.subscribe(num=>{
    console.log('of'+num);
  })
}

maragedata: any[] = [];

meragemap() {
  const users = [1, 2, 3, 4];

  from(users)
    .pipe(
      mergeMap(id =>
        this.http.get(`https://fakestoreapi.com/users/${id}`)
      )
    )
    .subscribe(res => {
      this.maragedata.push(res);
      console.log('mergeMap:', res);
    });
}

concatdata: any[] = [];

concatmap() {
  const users = [1, 2, 3, 4];

  from(users)
    .pipe(
      concatMap(id =>
        this.http.get(`https://fakestoreapi.com/users/${id}`)
      )
    )
    .subscribe(res => {
      this.concatdata.push(res);
      console.log('concatMap:', res);
    });
}

switchdata: any;

switchmap() {
  const users = [1, 2, 3, 4];

  from(users)
    .pipe(
      switchMap(id =>
        this.http.get(`https://fakestoreapi.com/users/${id}`)
      )
    )
    .subscribe(res => {
      this.switchdata = res;
      console.log('switchMap:', res);
    });
}

exdata: any;

exahsut() {
  const users = [1, 2, 3, 4];

  from(users)
    .pipe(
      exhaustMap(id =>
        this.http.get(`https://fakestoreapi.com/users/${id}`)
      )
    )
    .subscribe(res => {
      this.exdata = res;
      console.log('exhaustMap:', res);
    });
}

}
