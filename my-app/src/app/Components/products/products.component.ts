import { Component } from '@angular/core';
import * as products from './products.json';
import { ProductsService } from '../../service/products.service';
import { LoginService } from '../../service/login.service';
import { catchError, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  conuter$=new Observable<number>();
  constructor(private product:ProductsService,private logn:LoginService,private store:Store<any>){
    this.conuter$=this.store.select('count');
  }
  ngOnInit(){
    this.product.getprocutcs().subscribe({
      next:(data:any)=>{
        console.log("product data "+ data);
        this.products=data;
        this.filterdproducts=data;
      },
      error:(err:any)=>{
        console.log(err);
      }

    })


  }
  weather:any;
  erromessage:any;
getweather(){
this.logn.weahter().pipe(catchError((err:any)=>{
  this.erromessage=err.error;
  throw err;
}))
.subscribe({
  next:(data:any)=>{
    console.log(data);
    this.weather=data;
  },
  error:(err:any)=>{
    console.log(err);
  }})

}
  products:any;
  filterdproducts:any;
  p:number=1;
 sort(s:any){
  if(s==='asc'){
  this.filterdproducts.sort((a:any,b:any)=>{
    return a.price - b.price;
  });}
  else{
    this.filterdproducts.sort((a:any,b:any)=>{
      return b.price - a.price;
    });
  }

 }
 track(id:any,item:any){
  return item.id;

 }

 categories:String[]=[
  'ALL',
  'electronics',
  "men's clothing",
  'jewelery'
  ]
  selectedcategories:string='ALL';
  handelcahnges(){
    if(this.selectedcategories==='ALL'){
      this.filterdproducts=this.products;
      return;
    }
    this.filterdproducts=this.products.filter((product:any)=>product.category===this.selectedcategories);
     }
   
     search(events:any) {
      const query = events.toLowerCase();
      this.filterdproducts = this.products.filter((product: any) =>
        JSON.stringify(product).toLowerCase().includes(query)
      );
    }


}

