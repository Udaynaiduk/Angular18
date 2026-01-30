import { Component } from '@angular/core';
import { Product } from '../../Models/Product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  product!:Product
  Id!:number;
  category!:string;
  addToCart(product:Product){
    this.product=product;

  }
  constructor(private productservice:ProductService,private active:ActivatedRoute){

  }
  ngOnInit(){
    this.active.params.subscribe((data)=>{
      this.Id=data['id'];
      this.category=data['category'];
    })
    this.productservice.getbyid(this.Id,this.category,'ViewComponent').subscribe((data)=>{
      this.product=data;
    });
  }
}
