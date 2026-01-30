import { createReducer, on } from "@ngrx/store";
import { addtodo, addtodoFailure, addtodoSuccess, gettodo, gettodoFailure, gettodoSuccess } from "../doto.action";
import { state } from "@angular/animations";

const initialState: TodoState[] = [
    { id: 1, title: 'Learn NgRx', completed: false },
    { id: 2, title: 'Build an Angular App', completed: false },
];
export const todoReducer = createReducer(initialState,

    on(gettodo, (state: TodoState[]) => state),

    on(gettodoSuccess,(state,{todos})=>{
        return [...todos];
    }),
    on(gettodoFailure, (state, { error }) => {
        
        return state; // Return the current state as no changes are made
    })
,
on(addtodo, (state) => {
    return [...state];
}),
on(addtodoSuccess, (state, { todo }) => {
    return [...state, todo];
}),
on(addtodoFailure, (state, { error }) => {
    return state; 
}
))

interface TodoState {
    id: number; title: string; completed: boolean
}