import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Produt } from "../state";


export const productselector=createFeatureSelector<Produt>('product');
export const getallprodicts=createSelector(productselector,
(state:Produt)=> state.products
)
export const geterror=createSelector(productselector,
    (state:Produt)=>state.error
)

export const getloading=createSelector(productselector,
    (state:Produt)=>state.loading
)

export const getfilteredproducts=createSelector(productselector,
(state:Produt)=>state.filteredProducts.length?state.filteredProducts:state.products
)