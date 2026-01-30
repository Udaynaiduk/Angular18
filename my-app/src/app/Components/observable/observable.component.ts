import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, exhaustMap, filter, forkJoin, from, interval, map, merge, mergeMap, Observable, of, pipe, skip, switchMap, take, takeLast, toArray, zip } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  constructor(private http:HttpClient){

  }
ngOnInit(){
  this.ofdemo();
  this.fromdemo();
  this.intervals();
  this.mapdem();
  this.filterdemo();
  this.takedemo();
  this.zipdemo()
  this.fork();
  this.mergedemo();
  this.concatedemo();
  this.switchdemo();
  this.exahust()
}

observable=new Observable<any>((provider)=>{
    provider.next(1);
    provider.next(2);
    provider.next(3);
}
)
startObservable(){
  this.observable.subscribe((data)=>{
    console.log("data from observable "+ data);
  })
}
obserable=new Observable((provider)=>{
  setInterval(() => {
    provider.next(new Date().toLocaleTimeString());
  }, 1000);
})

fromdemo(){
  let cars=['bmw','audi','ford','honda'];
  var observable=from(cars);
  observable.subscribe((data)=>{
    console.log("car name "+ data);
  })
}
ofdemo(){
  let cars=of("bmw","audi","ford","honda");
  cars.subscribe((data)=>{
    console.log("car name "+ data);
  })
}

obsetable:Observable<any>|undefined;

intervals(){
   this.obsetable=interval(1000);
}
mapdemo:any;
mapdem(){
  let numbers=of(1,2,3,4,5);
  let result=numbers.pipe(
   map((x)=>x*2), toArray()
  ).subscribe((data)=>{console.log("map demo "+ data);
    this.mapdemo=data;
  });
}

filterdemo(){
    
    let numbers=of(1,2,3,4,5,6,7,8,9);
    let result=numbers.pipe(
    filter((x)=>x%2==0), toArray()
    ).subscribe((data)=>{console.log("filter demo "+ data);
      this.mapdemo=data;
    });

}
takedemo(){
    
    let numbers=of(1,2,3,4,5,6,7,8,9);
    let result=numbers.pipe(
    take(5),skip(1), toArray()
    ).subscribe((data)=>{console.log("filter demo "+ data);
      this.mapdemo=data;
    });
}

zipdemp:any
zipdemo(){
  let obs1=of('A','B','C');
  let obs2=of(1,2,3);
  let result=zip(obs1,obs2).pipe(
    map(([letter,number])=>({letter,number})),
    toArray()
  ).subscribe((data)=>{
    console.log("zip demo "+ data);
    this.zipdemp=data;
  });
}

usersdata: any[] = [];

fork() {
  let ids = [1, 2, 3, 4, 5];

  // Create an array of HTTP requests
  let requests = ids.map((id: number) =>
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  );

  forkJoin(requests).subscribe({
    next: (data) => {
      console.log("forkJoin demo:", data);
      this.usersdata = data; // array of 5 users
    },
    error: (err) => {
      console.error("fork Error:", err);
    }
  });
}
mergedemo() {
  let users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');

  let userPosts$ = users$.pipe(
    mergeMap(users => from(users)),          // convert array → stream of users
    mergeMap(user => {
      console.log("User: ", user);
      return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    })
  );

  userPosts$.subscribe({
    next: (data) => {
      console.log("merge demo:", data);
    },
    error: (err) => {
      console.log("merge error:", err);
    }
  });
}
concatedemo() {

  let user=of(1,2,3,4,5);
  let userposts=user.pipe(concatMap((userid)=>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
  }))
  userposts.subscribe({
    next:(data)=>{
      console.log("concat demo:",data);
    },
    error:(err)=>{
      console.log("concat error:",err);
    }
  })
}


switchdemo()
 {

  let user=of(1,2,3,4,5);
  let userposts=user.pipe(switchMap((userid)=>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
  }))
  userposts.pipe(take(1)).subscribe({
    next:(data)=>{
      console.log("switch demo:",data);
    },
    error:(err)=>{
      console.log("switch error:",err);
    }
  })

}
searchtext='';
searchdata:any;
search(event: string) {
  of(event)
    .pipe(
      switchMap((text) => {
        return this.http.get(`https://jsonplaceholder.typicode.com/posts/${text}`);
      })
    )
    .subscribe((data) => {
      console.log("search data:", data)
      this.searchdata = data;
    });
}

exahust(){
  var clicks=of(1,2,3,4,5);
  var result=clicks.pipe(
    exhaustMap((id)=>{
      return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    })
  ).subscribe(data=>console.log("exhaust map demo:",data));
}

}
