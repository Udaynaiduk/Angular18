import { inject } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of,pipe } from 'rxjs';
import * as ProductActions from '../actions/product.actions';


import { Injectable } from "@angular/core";

@Injectable()
export class ProductEffects {
    actions$ = inject(Actions);

    constructor(private productService: ProductService) {}

    loadProduct = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.produdctactions),
            mergeMap(() =>
                this.productService.getproducts().pipe(
                    map((data) => ProductActions.produdctactionsSuccess({ products: data })),
                    catchError((error) =>
                        of(ProductActions.produdctactionsFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    addproduct$=createEffect(()=>
    this.actions$.pipe(
        ofType(ProductActions.addProduct),
        mergeMap((action)=>
        this.productService.addproduct(action.product).pipe(
            map((data)=>ProductActions.addProductSucess({product:data})),
            catchError((error)=>
            of(ProductActions.addProductFailure({error:error.message}))
            )
        )
        )
    ))
}
   


