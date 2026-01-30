import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../Reducer/product.reducer";

const featureSelector = createFeatureSelector<ProductState>('products'); // key used in StoreModule

export const selectProductList = createSelector(
  featureSelector,
  (state) => state.products
);

export const selectProductLoading = createSelector(
  featureSelector,
  (state) => state.isLoading
);

export const selectProductError = createSelector(
  featureSelector,
  (state) => state.error
);
