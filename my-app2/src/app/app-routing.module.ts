import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { FormsComponent } from './Components/forms/forms.component';

const routes: Routes = [
  {
    path: '',component:ProductsComponent
  },
  {
    path:'signup',component:FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
