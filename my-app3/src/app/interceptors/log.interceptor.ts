import { getLocaleTimeFormat } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';

export const logInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('HTTP Request:', req.method, req.url, req.headers,Date.now().toLocaleString());
  return next(req);
};
