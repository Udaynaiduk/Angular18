import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-viewprodict',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './viewprodict.component.html',
  styleUrl: './viewprodict.component.css'
})
export class ViewprodictComponent {

  constructor(private http:HttpClient,private activate:ActivatedRoute){

  }
  prod:any;
  ngOnInit(){
this.activate.params.subscribe((params)=>{

  
  this.http.get("http://localhost:3000/products/"+params['id']).subscribe((result:any)=>{
    this.prod=result;
    console.log(this.prod);
  })
})
  }
}
