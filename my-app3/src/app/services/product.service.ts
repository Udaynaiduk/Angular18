import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';

@Injectable(
  {
    providedIn:'root'
  }
)
export class ProductService {

  constructor(private http:HttpClient) { }
headers=new HttpHeaders().append('call-from','prodiuct-service');
params=new HttpParams().append('limit','5');
  getProducts(from:string) {
    const newHeaders = this.headers.set('source', from);
    return this.http.get("https://fakestoreapi.com/products",{headers:newHeaders}).pipe(
      retry(3),
      catchError((error) => {
        throw error;
      })
    );
  }
  getProductById(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
