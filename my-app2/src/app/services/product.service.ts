import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
  
  }
  headers = new HttpHeaders().append('Content-Type', 'application/json').append('Call_From', 'product-service');

  getproducts(): Observable<Product[]> {
   return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
  addproduct(product:Product): Observable<Product> {
    return this.http.post<Product>('https://fakestoreapi.com/products', product, { headers: this.headers });
  }
}
