import { createReducer, on } from "@ngrx/store";
import { Addproducts, AddproductSucess, AddproductFailure, Loadproducts, LoadproductsSucess, LoadproductsFailure } from "../Actions/product.Actions";

export interface ProductState {
  products: any[];
  error: any;
  isLoading: boolean;
}

const initialState: ProductState = {
  products: [],
  error: null,
  isLoading: false
};

export const productReducer = createReducer(
  initialState,
  on(Addproducts, (state) => ({
    ...state,
    isLoading: true
  })),
  on(AddproductSucess, (state, action) => ({
    ...state,
    isLoading: false,
    products: [...state.products, action.product]
  })),
  on(AddproductFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),
  on(Loadproducts, (state) => ({
    ...state,
    isLoading: true
  })),
  on(LoadproductsSucess, (state, action) => ({
    ...state,
    isLoading: false,
    products: action.products
  })),
  on(LoadproductsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })
  
));
