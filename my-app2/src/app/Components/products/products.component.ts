import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, produdctactions } from '../../NGRX/actions/product.actions';
import { getallprodicts, getfilteredproducts } from '../../NGRX/selector/product.selector';
import { Product } from '../../Models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
products:any=new Observable<Product[]>();


constructor(private stroe:Store<Product[]>){
  this.products=this.stroe.select(getfilteredproducts);

}
product:Product={
  id:0,
  title:'test product',
  price:13.5,
  description:'lorem ipsum set',
  category:'electronic',
  image:'https://i.pravatar.cc',
  rating:{
    rate:3.9,
    count:120
  }
}
ngOnInit(){
  this.stroe.dispatch(produdctactions());
}

onSubmit(){
  this.stroe.dispatch(addProduct({ product: this.product }));
}
}
