import { CanActivateChildFn } from '@angular/router';

export const authcanloadGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
