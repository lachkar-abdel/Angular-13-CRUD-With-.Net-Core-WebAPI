import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  private authListenerSubs!: Subscription;

  isLoading: boolean;
  isSubmited: boolean;
  rememberMe: boolean;
  errorAuth: boolean;

  constructor(public authService: AuthService, public router: Router) {
    this.isLoading = false;
    this.isSubmited = false;
    this.rememberMe = false;
    this.errorAuth = false;
  }

  ngOnInit() {
    if (this.authService.getIsAuth()) {
      this.router.navigate(['/dashboard']);
    }

    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(authenticated => {
      this.isLoading = false;

      if (authenticated) { this.router.navigate(['/dashboard']); }
      else { this.errorAuth = true; }
  });
  }

  onLogin(loginForm: NgForm): void {
    this.isSubmited = true;
    this.errorAuth = false;
    if (loginForm.valid) {
      this.isLoading = true;
      this.authService.Login(loginForm.value.email, loginForm.value.password, this.rememberMe);
    }
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
