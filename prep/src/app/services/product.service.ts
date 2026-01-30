import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from '../Models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http:HttpClient) {
   }
   
   httpheader=new HttpHeaders();
   

   getProducts(component:string){
    const headers = new HttpHeaders({
      component: component,
      service: 'ProductService'
    });
    return this.http.get<any>("https://fakestoreapi.com/products", { headers });
   }

   getbyid(id:number,category:string,component:string){
    const headers = new HttpHeaders({
      component: component,
      service: 'ProductService',
      category: category
    });
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`, { headers });

   }

   addproduct(addproduct:any){
  return  this.http.post("https://fakestoreapi.com/products",addproduct);
   }
}
