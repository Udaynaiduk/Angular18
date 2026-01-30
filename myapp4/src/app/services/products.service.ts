import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http:HttpClient) {

    
   }
   getproducts():Observable<any>
    {
     return this.http.get('https://fakestoreapi.com/products')
    }
}
