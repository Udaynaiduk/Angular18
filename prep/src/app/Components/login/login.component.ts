import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: string = '';

 constructor(private loginService: LoginService, private router: Router) {}
 login:{email:string,password:string}={email:'',password:''};
  onSubmit(form: any) {
    const loginPayload = form.value; // { email, password }
    this.login={
      email:loginPayload.email,
      password:loginPayload.password
    }
    this.loginService.login(this.login).subscribe({
      next: () => {
        // Navigate only after successful login
        this.router.navigate(['/']);
      },
      error: (err) => {
        // Update error message to show in template
        this.loginService.error$.subscribe(errorMessage => {
          this.loginData = errorMessage;
        });
      }
    });
  }
}
