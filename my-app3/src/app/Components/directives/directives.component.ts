import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  url:any;
constructor(private dom:DomSanitizer){
this.url=this.dom.bypassSecurityTrustUrl("https://www.w3schools.com");
}
script:string="<script>alert('Hacked');</script>";
user: { id: number; name: string }[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' },
  { id: 3, name: 'Smith' },
  { id: 4, name: 'Jane' }
];

users:any[]=[{id:1,name:'uday',age:24},{id:2,name:'kiran',age:25},{id:3,name:'raju',age:26}];
ngOnInit(){
  
}
redlist(age:any) {
  if (age > 25) {
    return { 'color': 'red' };
  }
  return {};
}
flg:boolean=true;
numberValue:number=2;
trackByUser(id:number,item:any){
  return item.id;
}
age:number=45;

}
