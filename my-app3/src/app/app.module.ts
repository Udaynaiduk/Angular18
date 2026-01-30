import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BindingsComponent } from './Components/bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './Components/directives/directives.component';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { ScrollAnimateDirective } from './directives/scroll-animate.directive';
import { HighlightInvalidDirectiveDirective } from './directives/highlight-invalid-directive.directive';
import { NameDirective } from './directives/name.directive';
import { Age } from './pipes/age';
import { PiepsComponent } from './Components/pieps/pieps.component';
import { AgecalPipe } from './pipes/agecal.pipe';
import { NrcPipe } from './pipes/nrc.pipe';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { Child2Component } from './Components/child2/child2.component';
import { Child3Component } from './Components/child3/child3.component';
import { Child4Component } from './Components/child4/child4.component';
import { ProductsComponent } from './Components/products/products.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { LoginComponent } from './Components/login/login.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { logInterceptor } from './interceptors/log.interceptor';
import { ObserablesComponent } from './Components/obserables/obserables.component';
import { TemplateFormComponent } from './Components/template-form/template-form.component';
import { ModerfomrsComponent } from './Components/moderfomrs/moderfomrs.component';
import { ProductviewComponent } from './Components/productview/productview.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    DirectivesComponent,
    NumberonlyDirective,
    ScrollAnimateDirective,
    HighlightInvalidDirectiveDirective,
    NameDirective,
    Age,
    PiepsComponent,
    AgecalPipe,
    NrcPipe,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Child3Component,
    Child4Component,
    ProductsComponent,
    LoginComponent,
    ObserablesComponent,
    TemplateFormComponent,
    ModerfomrsComponent,
    ProductviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor, logInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
