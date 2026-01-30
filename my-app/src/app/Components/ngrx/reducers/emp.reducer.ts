import { createReducer, on } from "@ngrx/store"
import { addemp, addempSuccess, emp, empFailure, empSuccess } from "../actions/emp.action"
import { Employee } from "../../../Models/Employee"
import { state } from "@angular/animations"
import { act } from "@ngrx/effects"


const initialState:Employee[]= []
export const  empreducer=createReducer(
    initialState,
    on(emp,(state)=>state),
    on(empSuccess, (state, { employee }) => {
        return [...employee];
    }),
    on(empFailure,(state,action)=>({...state,error:action.error}),),

    on(addemp,(state)=>{
        return state;
    }),
    on(addempSuccess,(state, { employee }) => {
        return [employee];
    })


)