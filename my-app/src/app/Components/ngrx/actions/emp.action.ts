import { createAction, props } from "@ngrx/store";
import { Employee } from "../../../Models/Employee";


export const emp=createAction('[Emp] Load Employees');
export const empSuccess=createAction('[Emp] Load Employees Success',props<{employee:Employee[]}>());
export const empFailure=createAction('[Emp] Load Employees Failure',props<{error:string}>());
export const addemp=createAction('[Emp] Add Employee',props<{employee:Employee}>());
export const addempSuccess=createAction('[Emp] Add Employee Success',props<{employee:Employee}>());
export const addempFailure=createAction('[Emp] Add Employee Failure',props<{error:string}>());
export const deleteemp=createAction('[Emp] Delete Employee',props<{id:number}>());
export const deleteempSuccess=createAction('[Emp] Delete Employee Success',props<{id:number}>());
export const deleteempFailure=createAction('[Emp] Delete Employee Failure',props<{error:string}>());
export const updateemp=createAction('[Emp] Update Employee',props<{employee:Employee}>());
export const updateempSuccess=createAction('[Emp] Update Employee Success',props<{employee:Employee}>());
export const updateempFailure=createAction('[Emp] Update Employee Failure',props<{error:string}>());
