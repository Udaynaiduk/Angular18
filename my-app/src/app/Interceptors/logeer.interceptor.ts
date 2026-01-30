import { HttpInterceptorFn } from '@angular/common/http';

export const logeerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request made to URL:', req.url, 'with method:', req.method, 'at', new Date().toISOString());
  return next(req);
};
