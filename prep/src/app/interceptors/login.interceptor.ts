import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  const token = typeof localStorage !== 'undefined'
  ? localStorage.getItem('token')
  : null;

  const loginService = inject(LoginService);
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};
