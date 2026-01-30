import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { Product } from '../../Models/Product.model';
import { LoginService } from '../../services/login.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
@Input()
product:Product= {} as Product;
isloginedin:boolean=false;
margin=10
constructor(private login:LoginService,private render:Renderer2){
 this.login.isLogin$.subscribe((data)=>{
  this.isloginedin=data;
 });
}
platformId = inject(PLATFORM_ID);
ngDoCheck(){
  if(isPlatformBrowser(this.platformId))
    {
        console.log('Child Component Change Detection Called');
    }
}
ngAfterViewChecked(){
  if(isPlatformBrowser(this.platformId))
    {
        console.log('Child checked Change Detection Called');
    }
}
@ViewChild('view') view!: ElementRef;
ngAfterViewInit(){
this.render.addClass(this.view.nativeElement,'reder');
}
Addcart(){
  window.alert('The product has been added to your cart!');
}


}
