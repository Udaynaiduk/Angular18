import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BindingsComponent } from './Components/bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './Components/directives/directives.component';
import { CommonModule } from '@angular/common';
import { CursoleComponent } from './Components/cursole/cursole.component';
import { ProductsComponent } from './Components/products/products.component';
import { BodyComponent } from './Components/body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModelsComponent } from './Components/models-1/models.component';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { HightlighterDirective } from './directives/hightlighter.directive';
import { PiepesComponent } from './Components/piepes/piepes.component';
import { AgePipe } from './pipes/age.pipe';
import { RemainingPipe } from './pipes/remaining.pipe';
import { ChildComponent } from './Components/child/child.component';
import { ParentComponent } from './Components/parent/parent.component';
import { EmployeecrudComponent } from './Components/employeecrud/employeecrud.component';
import { EmployeedataComponent } from './Components/employeedata/employeedata.component';
import { AddemployeeeComponent } from './Components/addemployeee/addemployeee.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AddproductsComponent } from './Components/addproducts/addproducts.component';
import { authInterceptor } from './Interceptors/auth.interceptor';
import { logeerInterceptor } from './Interceptors/logeer.interceptor';
import { LoginComponent } from './Components/login/login.component';
import { loderInterceptor } from './Interceptors/loder.interceptor';
import { ObservableComponent } from './Components/observable/observable.component';
import { HotobserableComponent } from './Components/hotobserable/hotobserable.component';
import { SignalsComponent } from './Components/signals/signals.component';
import { FormComponent } from './Components/form/form.component';
import { Form2Component } from './Components/form2/form2.component';
import { Form3Component } from './Components/form3/form3.component';
import { Form4Component } from './Components/form4/form4.component';
import { ProductdetialsComponent } from './Components/productdetials/productdetials.component';
import { provideStore, StoreModule } from '@ngrx/store';
import { count } from 'rxjs';
import { reducer } from './Components/ngrx/reducers/reducer';
import { ConuterComponent } from './Components/conuter/conuter.component';
import { TodoComponent } from './Components/todo/todo.component';
import { todo } from './Components/ngrx/reducers/todoreducer';
import { EffectsModule } from '@ngrx/effects';
import { EmpEffects } from './Components/ngrx/effects/emp.effects';
import { empreducer } from './Components/ngrx/reducers/emp.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    BindingsComponent,
    DirectivesComponent,
    CursoleComponent,
    ProductsComponent,
    BodyComponent,
    ModelsComponent,
    NumberonlyDirective,
    HightlighterDirective,
    PiepesComponent,
    AgePipe,
    RemainingPipe,
    ChildComponent,
    ParentComponent,
    EmployeecrudComponent,
    EmployeedataComponent,
    AddemployeeeComponent,
    AddproductsComponent,
    LoginComponent,
    ObservableComponent,
    HotobserableComponent,
    SignalsComponent,
    FormComponent,
    Form2Component,
    Form3Component,
    Form4Component,
    ProductdetialsComponent,
    ConuterComponent,
    TodoComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    NgxPaginationModule,
    StoreModule.forRoot({count:reducer,
      todo:todo,emp:empreducer
    }, {}),
    EffectsModule.forRoot([EmpEffects])
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor,logeerInterceptor,loderInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
