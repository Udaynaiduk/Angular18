import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ProductService]
})
export class ProductsComponent {
products!:any[]
productserv=inject(ProductService);
router=inject(Router);
ngOnInit(){
this.productserv.getProducts('product').subscribe({
  next:(data:any)=>{
    this.products=data;
  },
  error:(err:any)=>{
    console.log(err);
  }
 });

const fetchdata = fetch('https://fakestoreapi.com/products');
const obser=from(fetchdata);
obser.subscribe({
  next:(response:any)=>{
      console.log("fetc" + response);
  },
  error:(err:any)=>{
    console.log(err);
  }
});
}
viewProduct(id:number){
 
this.router.navigate(['/productview',id])
}

}
