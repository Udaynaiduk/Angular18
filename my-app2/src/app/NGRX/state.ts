import { Product } from "../Models/Products";

export interface Produt{
    filteredProducts:Product[],
    products:Product[],
    error:string,
    loading:boolean

}