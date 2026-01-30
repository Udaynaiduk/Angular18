import { Component, inject } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
auth=inject(AuthserviceService);
  submit(data: any) {
    this.auth.login(data).subscribe((response:any) => {
        this.auth.settoken(response.token);
        console.log("Login successful, token stored. "+ this.auth.gettoken());
    });
  }
  
}
