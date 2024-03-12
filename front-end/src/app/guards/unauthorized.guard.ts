import { Injectable } from '@angular/core';
import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedGuard implements CanActivateChild {
  isAuthenticated: null | boolean = null;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.checkAuthentication();
    this.authService.isAuthenticated().subscribe({
      next: (auth) => {
        this.isAuthenticated = auth;
      },
    });
  }

  canActivateChild(): boolean | UrlTree {
    if (!this.isAuthenticated) return true;
    else return this.router.createUrlTree(['']);
  }
}
