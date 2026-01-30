import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../ngrx/actions/counter.action';

@Component({
  selector: 'app-conuter',
  templateUrl: './conuter.component.html',
  styleUrl: './conuter.component.css'
})
export class ConuterComponent {
  counter$=new Observable<number>();
  constructor(private store:Store<any>){
this.counter$=this.store.select('count');
  }
  increment(){
    this.store.dispatch(increment());
  }

}
