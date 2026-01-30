import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private login:LoginService, private router:Router){

  }
  email='';
  password='';
  errorMessage='';
  onSubmit(){
    const data = {
      email: this.email,
      password: this.password
    };
this.login.login(data).subscribe({
  next:(res:any)=>{
    console.log("login successful", res);
    localStorage.setItem('token', res.token);
    this.router.navigate(['/products']);
  },
  error:(err:any)=>{
    this.errorMessage=err.message;
    console.log("login failed", err);
    alert("Login Failed");
  }
})

  }

}
