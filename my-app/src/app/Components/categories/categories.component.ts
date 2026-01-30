import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
listCategories: Category[] = [
  {name: 'Electronics', img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg'},
  {name: 'Books', img: 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/dec/bau/ain/gw/ABdelivery_372_232._SY232_CB776314701_.jpg'},
  {name: 'Clothing', img: 'https://m.media-amazon.com/images/I/51sSJUx8mwL._AC_SY400_.jpg'},
  {name: 'Home & Kitchen', img: 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw1/KitchenAppliances_372_232._SY232_CB777666522_.jpg'},
  {name: 'Sports', img: 'https://m.media-amazon.com/images/I/61RpRYFb2wL._AC_SY400_.jpg'},
  {name: 'Toys', img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg'}
];

}

interface Category {
  
  name: string;
  img: string;
}