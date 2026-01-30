import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let http:HttpTestingController
  beforeEach(() => {
    
    TestBed.configureTestingModule({
     imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
    http=TestBed.inject(HttpTestingController)
  });
  afterEach(()=>{
    http.verify();
  })
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch products with correct headers', () => {
    service.getProducts('ProductServiceTest').subscribe(res=>{
      expect(res).toBeTruthy();
      expect(res).toEqual([ { id: 1, title: 'Test Product' } ]);
    })
    const req=http.expectOne("https://fakestoreapi.com/products");
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('component')).toBe('ProductServiceTest');

    req.flush([ { id: 1, title: 'Test Product' } ]);
});
})
