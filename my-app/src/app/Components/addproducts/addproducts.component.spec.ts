import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductsComponent } from './addproducts.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../service/products.service';

describe('AddproductsComponent', () => {
  let component: AddproductsComponent;
  let fixture: ComponentFixture<AddproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddproductsComponent],
      providers:[provideHttpClient()],
      imports:[FormsModule,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call product service',()=>{
    const prodservice = TestBed.inject(ProductsService);
    spyOn(prodservice,'addpoduct');
    component.submit();
    expect(prodservice.addpoduct).toHaveBeenCalledWith(component.product);
  }),
  it('should load form data',()=>{
    const product = {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      description: 'This is a test product',
      category: 'Test Category',
      image: 'test-image.jpg',
      rating: {
        rate: 4.5,
        count: 10
      }
    };
  component.product = product;

    expect(component.product.id).toBe(1);
    expect(component.product.title).toBe('Test Product');
    expect(component.product.price).toBe(99.99);
    expect(component.product.description).toBe('This is a test product');
    expect(component.product.category).toBe('Test Category');
    expect(component.product.image).toBe('test-image.jpg');
    expect(component.product.rating.rate).toBe(4.5);
    expect(component.product.rating.count).toBe(10);
  })
});
