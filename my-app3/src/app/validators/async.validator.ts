import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthserviceService } from '../services/authservice.service';
import { inject } from '@angular/core';

export function Asyncusernamevalidator(): AsyncValidatorFn {
  const userService = inject(AuthserviceService);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    
    if (!control.value) return of(null); // skip empty values
    return userService.getuserbyusername(control.value).pipe(
      map(user => (user ? { usernameTaken: true } : null))
    );
  };
}
