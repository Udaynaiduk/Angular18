import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addtodo, addtodoSuccess, gettodo, gettodoFailure, gettodoSuccess } from "./doto.action";
import { catchError, mergeMap, of } from "rxjs";


export class todoeffects{
    action=inject(Actions)
    constructor(){

    }
 addtodo$=createEffect(() => 
    this.action.pipe(
        ofType(addtodo),
        mergeMap((action: { todo: any }) => 
            
            of(addtodoSuccess({ todo: action.todo }))
        ),
        catchError(() => of(gettodoFailure({ error: 'Failed to add todo' })))
    )
 )
 gettodo$=createEffect(()=>
    this.action.pipe(
        ofType(gettodo),
        mergeMap(() =>
            // Replace with actual logic to fetch todos
            of(gettodoSuccess({ todos: [] })) // Assuming an empty array as a placeholder
        ),
        catchError(() => of(gettodoFailure({ error: 'Failed to fetch todos' })))
    )
 )
}