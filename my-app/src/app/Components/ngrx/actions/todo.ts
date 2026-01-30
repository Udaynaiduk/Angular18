import { createAction, props } from "@ngrx/store";


export const addtask=createAction('Add Task',props<any>());
export const deletetask=createAction('Delete Task',props<any>());
