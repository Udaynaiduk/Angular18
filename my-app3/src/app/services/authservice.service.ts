import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { 

  }

  private tokenKey: string = "";
  login(user:any){
    return this.http.post("https://fakestoreapi.com/auth/login",user);
  }

  settoken(token:string){
    this.tokenKey=token;
  }
  gettoken(){
    return this.tokenKey;
  }
  removetoken(){
    this.tokenKey="";
  }
  getuserbyusername(username: string) {
    return this.http.get<any[]>("https://fakestoreapi.com/users").pipe(
      map(users => users.find(u => u.username === username)) // returns the matching user or undefined
    );
  }
  
}
