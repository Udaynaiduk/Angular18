import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../../services/product.service";
import { catchError, mergeMap, of } from "rxjs";
import { Addproducts, AddproductSucess, Loadproducts, LoadproductsFailure, LoadproductsSucess } from "../Actions/product.Actions";
import { Addproduct } from "../Model/Addproduct.model";
import { Product } from "../../Models/Product.model";


@Injectable({
    providedIn: 'root'
})
export class ProductEffects {
actions=inject(Actions)
product=inject(ProductService)

addproduct$=createEffect(() => 
    this.actions.pipe(
        ofType(Addproducts),
        mergeMap((action) => 
            this.product.addproduct(action).pipe(
                mergeMap((data: any) => of(AddproductSucess({ product: data as Addproduct })))
                // Add any additional operators if needed
            ,catchError((error) => of({ type: '[Product API] Add Product Failure', error })))
        )
    )
);

loadproducts$=createEffect(() => 
    this.actions.pipe(
        ofType(Loadproducts),
        mergeMap(() => 
            this.product.getProducts('ProductEffects').pipe(
                mergeMap((data: any) => of(LoadproductsSucess({ products: data as Product[] }))),
                catchError((error) => of(LoadproductsFailure({error: error})))
            )
        )
    )
);

}