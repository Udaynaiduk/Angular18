import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Product } from '../../Models/Product.model';
import { ProductService } from '../../services/product.service';
import { isPlatformBrowser } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Loadproducts } from '../../NGRX/Actions/product.Actions';
import { selectProductError, selectProductList, selectProductLoading } from '../../NGRX/Selector/Product.selector';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products$=new Observable<Product[]>();
isloading$=new Observable<boolean>();
error$=new Observable<string|null>();

constructor(private productservice:ProductService,private store:Store<any>){
  // Dispatch action to load products
  
  this.store.dispatch(Loadproducts());
  // Select products, loading status, and error from the store
  this.products$=this.store.select(selectProductList);
  this.isloading$=this.store.select(selectProductLoading);
  this.error$=this.store.select(selectProductError);

}
ngDoCheck(){
  if(isPlatformBrowser(this.platformId))
    {
        console.log('Parent Component Change Detection Called');
    }
}
ngAfterViewChecked(){
  if(isPlatformBrowser(this.platformId))
    {
        console.log('Parent  View checked Change Detection Called');
    }
}
platformId = inject(PLATFORM_ID);
p: number = 1
ngOnInit(){
  

}
track(index:number,product:Product){
  return product.id;
}


}
