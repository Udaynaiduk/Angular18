import { createAction, props } from "@ngrx/store";
import { Product } from "../../Models/Products";


export const produdctactions=createAction('[Product] Load Products');
export const produdctactionsSuccess=createAction('[Product] Load Products Success',props<{products:Product[]}>()); 
export const produdctactionsFailure=createAction('[Product] Load Products Failure',props<{error:string}>());
export const addProduct=createAction('[Product] Add Product',props<{product:Product}>());
export const addProductSucess=createAction('[Product] Add Product Success',props<{product:Product}>());
export const addProductFailure=createAction('[Product] Add Product Failure',props<{error:string}>());
export const SeacrhProduct=createAction('[Product] Search Product',props<{searchTerm:string}>());
