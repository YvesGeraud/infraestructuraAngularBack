import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    const token = this.authService.getToken();
    console.log('Token en AuthGuard:', token);
    if (token) {
      return true;
    } else {
      this.authService.logout(); // Limpia el token, si por alguna razón sigue ahí
      return this.router.parseUrl('/login');
    }
  }
}
