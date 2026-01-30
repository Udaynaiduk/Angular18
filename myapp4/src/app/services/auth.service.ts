import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  islogin$ = new BehaviorSubject<boolean>(false);
errorMessage:string=''
  hndelerrr(errpr:HttpErrorResponse){
   
  this.errorMessage=errpr.error
  }
  constructor(private http:HttpClient) {

   }
    login(data:any){
      this.http.post('https://fakestoreapi.com/auth/login',data,{headers:this.headers}).subscribe({
        next:(res)=>{
        
          localStorage.setItem('token',(res as any).token)
          this.islogin$.next(true)
          
        },
        error:(err)=>{
          this.hndelerrr(err)
        }

    })
    }
}
