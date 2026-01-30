import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { SeacrhProduct } from '../../NGRX/actions/product.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private store=inject(Store);
  search:string='';
  onSearch(event:any){
    this.store.dispatch(SeacrhProduct({searchTerm:this.search}));
    this.search='';
  }

}
