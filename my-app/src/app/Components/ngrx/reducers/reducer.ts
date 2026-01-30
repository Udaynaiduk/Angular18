import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { decrement, increment } from "../actions/counter.action";
import { state } from "@angular/animations";

export const initialState =0;
export const reducer=createReducer(initialState,
   on(increment,state=>state+1),
   on(decrement,state=>state-1),
   on(reset=>0)


);