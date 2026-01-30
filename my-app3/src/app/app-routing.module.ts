import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductviewComponent } from './Components/productview/productview.component';

const routes: Routes = [
  {
    path:'productview/:id',component:ProductviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
