import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth=inject(AuthserviceService);
  if(auth.gettoken()){
    req=req.clone({
      setHeaders:{
        Authorization:`Bearer ${auth.gettoken()}`
      }
    })
  }
  return next(req);
};
