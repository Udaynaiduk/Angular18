import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Addproducts } from '../../NGRX/Actions/product.Actions';

@Component({
  selector: 'app-addnewrpduct',
  templateUrl: './addnewrpduct.component.html',
  styleUrl: './addnewrpduct.component.css'
})
export class AddnewrpductComponent {
productForm!:FormGroup;
constructor(private fb:FormBuilder,private store:Store)
{
  this.productForm = this.fb.group({
    id: [0, [Validators.required, Validators.min(1)]],
    title: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required]],
    description: [''],
    category: [''],
    image: ['']
  });
 
}

isplatform=PLATFORM_ID
onSubmit(){
  const addproducr:{id:number,title:string,price:number,description:string,category:string,image:string} = {
    id: this.productForm.value.id,
    title: this.productForm.value.title,
    price: this.productForm.value.price,
    description: this.productForm.value.description,
    category: this.productForm.value.category,
    image: this.productForm.value.image
  };
  if (this.productForm.valid) {
    console.log(this.productForm.value);
    // Dispatch an action to add the product
    this.store.dispatch(Addproducts({ product: addproducr }));
    console.log('Form submitted successfully');
  } else {
    console.log('Form is invalid');
  }   
}
}
