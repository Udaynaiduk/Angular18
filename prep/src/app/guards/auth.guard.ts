import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.isLogin$.pipe(
    take(1), // only take the latest value and complete
    map(isLoggedIn => {
      if (isLoggedIn) {
        return true; // allow access
      } else {
        router.navigate(['/Login']); // redirect to login
        return false;
      }
    })
  );
};
