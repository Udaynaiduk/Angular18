import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { Product } from '../../Models/Product.model';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productservice: ProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productservice=TestBed.inject(ProductService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
it('should call ProductService to fetch products', () => {

  const mockProduct:Product[]= [{
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9, count: 120 }
  }];
  const spy = spyOn(productservice, 'getProducts').and.returnValue(of(mockProduct));
  component.ngOnInit();
  expect(spy).toHaveBeenCalled();
  component.products$.subscribe(products => {
    expect(products).toEqual(mockProduct);
  });
});
});
