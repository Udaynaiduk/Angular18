import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unauth',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './unauth.component.html',
  styleUrl: './unauth.component.css'
})
export class UnauthComponent {

}
