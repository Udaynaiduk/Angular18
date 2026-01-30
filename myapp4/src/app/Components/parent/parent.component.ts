import { Component, ElementRef, inject, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { DynmaicComponent } from '../dynmaic/dynmaic.component';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers:[ProductsService]
})
export class ParentComponent {
products:any
filterproducts:any
script:string="<script>alert('Hacked')</script>"
sanitizer=inject(DomSanitizer)
constructor(private prod:ProductsService,private render:Renderer2){
  this.sanitizer.bypassSecurityTrustScript(this.script)
  this.prod.getproducts().subscribe((data)=>{
    this.products=data
    this.filterproducts=data

  })
}
name:string="uday"
time:Observable<any>=new Observable((provider)=>{
 setInterval(()=>{
  provider.next(new Date().toLocaleTimeString())
 },1000)
})
searchitem=''
searchitems(event:any){
  this.filterproducts = this.products.filter((item: any) => {
    return item.title.toLowerCase().includes((event).toLowerCase());
  });
  if(this.searchitem==''){
    this.filterproducts=this.products
  }
}

@ViewChild('titel') titel!: ElementRef;
ngAfterViewInit()
{
  this.render.addClass(this.titel.nativeElement,'titel');
}

@ViewChild('dynamic',{read:ViewContainerRef})dynmaicload!:ViewContainerRef;
load(){
  this.dynmaicload.clear();
  var component=this.dynmaicload.createComponent(DynmaicComponent);
 component.instance.parentset="This is from parent component";

}
}
