import { createReducer, on, State } from "@ngrx/store";
import { addProduct, addProductFailure, addProductSucess, produdctactions, produdctactionsFailure, produdctactionsSuccess, SeacrhProduct } from "../actions/product.actions";
import { Produt } from "../state";

export const intialstate:Produt={
    products:[],
    filteredProducts:[],
    error:'',
    loading:false
}
export const productdata=createReducer(intialstate,
on(produdctactions,state=>({
    ...state,
    loading:true,
    error:''
})
),
on(produdctactionsSuccess,(state,{products})=>({
    ...state,
    products,
    loading: false,
    error: ''
})),
on(produdctactionsFailure, (state, {error}) =>({
    ...state,
    loading: false,
    error: error })
),
on(addProduct,(state,{product})=>({
    ...state,
    loading:false,
    error:''
})),
on(addProductSucess,(state,{product})=>({
    ...state,
    products:[...state.products,product],
    loading:false,
    error:''
})),
on(addProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(SeacrhProduct, (state, { searchTerm }) => {
    const filtered = searchTerm? state.products.filter(prod => prod.title.toLowerCase().includes(searchTerm.toLowerCase())) : state.products;
    return {
      ...state,
      filteredProducts: filtered
    };
  })
);

