import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(username: string, password: string) {
    // Lógica de autenticación
    if (username === 'admin' && password === '12345') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}
