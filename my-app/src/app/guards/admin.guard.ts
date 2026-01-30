import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../service/login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const login=inject(LoginService)
  if(login.admin()){
    return true;
  }
  else{
    alert("Access Denied! Admins Only");
    return false;
  }

};
