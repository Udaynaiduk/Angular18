import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatePipe } from 'ngx-pagination';
import { LoginComponent } from './Components/login/login.component';
import { BodyComponent } from './Components/body/body.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductdetialsComponent } from './Components/productdetials/productdetials.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { adminGuard } from './guards/admin.guard'; // Adjust the path as necessary

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'productsdeatils',component:ProductdetialsComponent},
  {path:'parent',component:ParentComponent,
    children:[
      {path:'child',component:ChildComponent}
    ],canActivate:[adminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
