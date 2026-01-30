import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoaderService } from './loader.service';
import { provideHttpClient } from '@angular/common/http';

describe('LoaderService', () => {
  let service: LoaderService;
  let http:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
     imports:[provideHttpClient()]
    });
    service = TestBed.inject(LoaderService);
  });
  afterEach(()=>{
    http.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
