import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductComponent } from './Components/product/product.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { SinginComponent } from './Components/singin/singin.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ViewComponent } from './Components/view/view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DiscountPipe } from './pipes/discount.pipe';
import { loginInterceptor } from './interceptors/login.interceptor';
import { ObserablesComponent } from './Components/obserables/obserables.component';
import { AddnewrpductComponent } from './Components/addnewrpduct/addnewrpduct.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './NGRX/Effects/product.effects';
import { productReducer } from './NGRX/Reducer/product.reducer';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    SinginComponent,
    HighlightDirective,
    DiscountPipe,
    ObserablesComponent,
    AddnewrpductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({products:productReducer}, {}),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [
    ProductService,
    provideClientHydration(),
    provideHttpClient(withInterceptors([loginInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
