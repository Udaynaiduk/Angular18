import { createReducer, on } from "@ngrx/store";
import { addtask, deletetask } from "../actions/todo";


let task=[
    {
    id:1,
    name:'task one'
},
{
    id:2,
    name:'task two'
}

]
export const todo=createReducer(task,
    on(addtask,(state,action)=>{
        return [...state,action];
    }),
    on(deletetask,(state,action)=>{
        return state.filter(task=>task.id !== action.id);
    }
)
)