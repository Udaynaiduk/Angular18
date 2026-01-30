import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { Product } from '../../Models/Product.model';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should accept product input and render title', () => {
    const mockProduct: Product = {
      id: 1,
      title: "Test Product",
      price: 99.99,
      description: "This is a test product",
      category: "test category",
      image: "https://example.com/image.png",
      rating: { rate: 4.5, count: 10 }
    };

    component.product = mockProduct;
    fixture.detectChanges();

    expect(component.product).toEqual(mockProduct);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h5')?.textContent).toContain("Test Product");
    expect(compiled.querySelectorAll('p')[0]?.textContent).toContain("This is a test product");
  });

});
