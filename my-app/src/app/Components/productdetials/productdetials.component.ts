import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetials',
  templateUrl: './productdetials.component.html',
  styleUrl: './productdetials.component.css'
})
export class ProductdetialsComponent {
constructor(private activat:ActivatedRoute){

}
ngOnInit(){
  this.activat.queryParams.subscribe({
    next:(data:any)=>{
      console.log("product id "+data.id);
    }
  })
}
}
