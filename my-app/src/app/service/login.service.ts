import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url="https://localhost:7075/user/api/login";
  login(data:any){
    return this.http.post(this.url,data);
  }

  weahter(){
    return this.http.get("https://localhost:7049/WeatherForecast",{observe:'response'});
  }

  admin(){
    return true;
  }

}
