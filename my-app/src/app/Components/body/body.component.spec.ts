import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { ProductsComponent } from '../products/products.component';
import { ModelsComponent } from '../models-1/models.component';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from '../header/header.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CursoleComponent } from '../cursole/cursole.component';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { AddproductsComponent } from '../addproducts/addproducts.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyComponent,AppComponent,
        ProductsComponent,
        ModelsComponent,HeaderComponent,CategoriesComponent,CursoleComponent,PaginatePipe,AddproductsComponent],
      providers:[provideHttpClient()],
      imports:[AppRoutingModule,StoreModule.forRoot({}),NgxPaginationModule,FormsModule,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should h1 element have',()=>{
    let compiled=fixture.nativeElement as HTMLElement;
   expect(compiled.querySelector('h1')?.textContent).toContain('Ng content');
  });
});
