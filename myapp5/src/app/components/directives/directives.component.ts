import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
proidcts:any
constructor(private http:HttpClient){
  this.http.get('https://fakestoreapi.com/products').subscribe((data)=>{
      this.proidcts=data
      console.log(this.proidcts);
    })
}

trackByIndex(index: number, item: any): number {
  return index;
}
highclass={ 'background-color': 'red','color':'white' }
price(pric:any){
  if(pric >100){
    return this.highclass
  }
  else{
    return {}
  }
}

class(cat:any){
  if(cat<100){
    return 'high'
  }
  else{
    return {}
  }
}}

