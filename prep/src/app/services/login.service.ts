import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  router=inject(Router)
  private isLoginSubject = new BehaviorSubject<boolean>(
    typeof localStorage !== 'undefined' && !!localStorage.getItem('token')
  );

  isLogin$ = this.isLoginSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }) {
    const payload = {
      username: user.email,
      password: user.password
    };

    return this.http
      .post<{ token: string }>('https://fakestoreapi.com/auth/login', payload,{ observe: 'response' })
      .pipe(
        tap({
          next: (res) => {
            console.log(res);
            localStorage.setItem('token', res.body?.token || '');
            this.isLoginSubject.next(true);
          },
          error: (err) => {
            console.log(err);
            this.errorSubject.next(err.error);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
}

}
