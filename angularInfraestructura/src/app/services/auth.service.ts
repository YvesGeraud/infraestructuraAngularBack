import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // URL de tu backend
  private tokenKey = 'auth_token';
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) { }

  login(credentials: { usuario: string; contrasena: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
          this.loggedIn.next(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
  }

  getToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    if (!token || token === 'null' || token.trim() === '') {
      localStorage.removeItem(this.tokenKey);
      return null;
    }
    try {
      const decoded = jwtDecode<TokenPayload>(token);
      // exp se define en segundos desde epoch
      if (decoded.exp * 1000 < Date.now()) {
        // El token ha expirado
        localStorage.removeItem(this.tokenKey);
        return null;
      }
    } catch (error) {
      // Si ocurre un error al decodificar, eliminamos el token
      localStorage.removeItem(this.tokenKey);
      return null;
    }
    return token;
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
