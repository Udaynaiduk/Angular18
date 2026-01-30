import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { SinginComponent } from './Components/singin/singin.component';
import { ViewComponent } from './Components/view/view.component';
import { authGuard } from './guards/auth.guard';
import { AddnewrpductComponent } from './Components/addnewrpduct/addnewrpduct.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'Login',component:LoginComponent},
  {path:'SignIn',component:SinginComponent},
  {path:'product/:id/:category',loadChildren:()=>import('./view').then(x=>x.ViewModule) ,canLoad: [authGuard] },
  {path:'Products',component:ProductsComponent,canActivate:[authGuard]},
  {path:'add',component:AddnewrpductComponent}, 
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
