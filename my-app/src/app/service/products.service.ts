import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../Models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 

  }

  headers:HttpHeaders=new HttpHeaders({'Content-Type':'application/json'});
  params=new HttpParams().set('page','1').set('limit','10');
  parm2=this.params.set('sort','asc');


  getprocutcs()
  {
   const product= this.http.get('https://fakestoreapi.com/products',{ headers: this.headers, params: this.parm2,observe:'body' })
    console.log(product);
    return product;
  }

  addpoduct(Product:Products){
    this.http.post("http://localhost:3000/products", Product,{ headers: this.headers, params: this.parm2,observe:'body' }).subscribe((data) => {
      console.log("Product added successfully",data);
    })
  }
}
