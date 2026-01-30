import { createAction, props } from "@ngrx/store";



export const gettodo=createAction('get')
export const gettodoSuccess=createAction('get success',props<{todos:any[]}>())
export const gettodoFailure=createAction('get failure',props<{error:string}>())
export const deletetodo=createAction('delete',props<{id:number}>())
export const updatetodo=createAction('update',props<{id:number,text:string}>())
export const updatetodoSuccess=createAction('update success',props<{todo:any}>())
export const updatetodoFailure=createAction('update failure',props<{error:string}>())
export const deletetodoSuccess=createAction('delete success',props<{id:number}>())
export const deletetodoFailure=createAction('delete failure',props<{error:string}>())
export const addtodo=createAction('add todo',props<{todo:any}>())
export const addtodoSuccess=createAction('add success',props<{todo:any}>())
export const addtodoFailure=createAction('add failure',props<{error:string}>())


