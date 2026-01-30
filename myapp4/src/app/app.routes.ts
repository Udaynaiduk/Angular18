import { Routes } from '@angular/router';
import { ParentComponent } from './Components/parent/parent.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { ViewprodictComponent } from './Components/viewprodict/viewprodict.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { TodoComponent } from './Components/todo/todo.component';

export const routes: Routes = [
    {
        path: '',component:LoginComponent
    },
    {
        path:'parent',component:ParentComponent ,
        
           canActivate:[authGuard]
         
    },
    {
        path:'pipe',component:PipesComponent, 
        children:[
            {path:'todo',component:TodoComponent}
        
        ],canActivateChild:[authGuard]
        
    },
    {
        path:'login',loadComponent:()=>import('./Components/login/login.component').then(c=>c.LoginComponent)
    },
    {
        path:'view/:id',component:ViewprodictComponent
    }
    ,{
        path:'**',redirectTo:''
    }
];
