import { Component } from '@angular/core';
import { Products } from '../../Models/products';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  constructor(private prodservice:ProductsService){


  }
  product: Products = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
}

submit() {
  this.prodservice.addpoduct(this.product);
  console.log("Product Submitted:", this.product);
}
}
