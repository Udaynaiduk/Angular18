import { createAction, props } from "@ngrx/store";
import { Product } from "../../Models/Product.model";
import { Addproduct } from "../Model/Addproduct.model";

export const Addproducts=createAction('Add Product',props<{product:Addproduct}>());
export const AddproductSucess=createAction('Add Product Sucess',props<{product:Addproduct}>());
export const AddproductFailure=createAction('Add Product Failure',props<{error:any}>());

export const Loadproducts=createAction('Load Products');
export const LoadproductsSucess=createAction('Load Products Sucess',props<{products:Product[]}>());
export const LoadproductsFailure=createAction('Load Products Failure',props<{error:any}>());

