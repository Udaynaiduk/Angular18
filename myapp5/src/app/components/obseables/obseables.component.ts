import { Component } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-obseables',
  templateUrl: './obseables.component.html',
  styleUrl: './obseables.component.css'
})
export class ObseablesComponent {
time=new Observable<string>();
constructor(){
this.obser()
this.form()
this.of()
}
obser(){
  this.time=new Observable((privider)=>{
    setInterval(()=>{
      privider.next(new Date().toLocaleTimeString())
    },1000)
  })
}
form(){
  let cars=['benz','bmw','audi','ferrari']
  let carober=from(cars)
  carober.subscribe((data)=>{
    console.log(data);
  })
}
of(){
  let ofob=of(1,2,3).pipe(
    map(res=>{
      return {
        data:res,
        square:res*2

      }
    })
  ).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(error)=>{
      console.log(error);
    },
    complete:()=>{
      console.log('completed');
    }
  })

}

}
