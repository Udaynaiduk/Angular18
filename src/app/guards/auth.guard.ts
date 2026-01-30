import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = inject(AuthService).islogin$
  const router=inject(Router)
  if (!isAuthenticated ||localStorage.getItem('token')==null) {
    alert('You are not authenticated to view this page. Please log in.');
    router.navigate(['/pipe']);
  }
  return isAuthenticated;
};
