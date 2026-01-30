import { Component, ElementRef, EmbeddedViewRef, inject, Renderer2, ViewChild, viewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[ProductService]
})
export class NavbarComponent {
login=inject(LoginService);
render=inject(Renderer2)
router=inject(Router);


logout() {
  this.login.logout();
  this.router.navigate(['/Login']);
}

}
