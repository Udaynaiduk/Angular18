import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  prod: any;
  prodser = inject(ProductService);
  activatedroute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(params => {
      const id = params.get('id'); // or Number(params.get('id'))
      console.log(id);

      if (id) {
        this.prodser.getProductById(id).subscribe({
          next: (data: any) => {
            console.log("Prodct view "+data);
            this.prod = data;
          },
          error: (err: any) => console.log(err)
        });
      }
    });
   
  }

}
