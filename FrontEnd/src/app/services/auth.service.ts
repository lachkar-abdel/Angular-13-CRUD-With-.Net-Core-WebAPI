import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class AuthService {
  private authStatusListener = new Subject<boolean>();

  private isAuthenticated: boolean;
  private currentToken: string;
  private tokenTimer: any;
  private completeName: string;

  constructor(private http: HttpClient, private router: Router) 
  {
      this.currentToken = "";
      this.completeName = "";
      this.isAuthenticated = false;
  }

  getToken() {
    return this.currentToken;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getName() {
    return this.completeName;
  }

 
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

 
  Login(email: string, password: string, rememberMe: boolean) {
    const url = 'api/User/authenticate';
    const user = {mail: email, password: password};

    this.http.post<{token: string, name: string}>(url, user)
      .subscribe(response => {
        const { token, name } = response;

        if (token) {
          this.completeName = name;
          this.currentToken = token;

          this.setAuthTimer(3600);
          this.saveAuthData(token, name);

          this.authStatusListener.next(true);
          this.isAuthenticated = true;
        }
      }, (error: any) => {
        console.error(error);
        this.authStatusListener.next(false);
      }
    );
  }

  Logout() {
    this.isAuthenticated = false;
    this.currentToken = "";
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();

    if (!authInformation) {
      return;
    }

    const dateNow = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - dateNow.getTime();

    if (expiresIn > 0 && authInformation.token && authInformation.name ) {
      this.currentToken = authInformation.token;
      this.completeName = authInformation.name;

      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.Logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, name: string) {
    const now = new Date();
    const expirationDate = new Date(now.getTime() + 3600 * 1000);

    
    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
   
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');

    if (token && expirationDate) {
      return {token, name,  expirationDate: new Date(expirationDate)};
    }

    return;
  }
}
