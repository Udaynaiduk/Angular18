import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-dynmaic',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dynmaic.component.html',
  styleUrl: './dynmaic.component.css'
})
export class DynmaicComponent {
parentset!:string;
users:any=[{id:1,name:'abc'},{id:2,name:'xyz'},{id:3,name:'pqr'}];

stylr(user:any){
  if(user.name.startsWith('a')){
    return { color: "red" };
  }
  return { color: "blue" };
}
}
