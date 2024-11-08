// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  // Simulate login
  login(username: string, password: string): boolean {
    // Placeholder login check - replace with actual login logic
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  // Check if user is logged in
  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  // Simulate logout
  logout() {
    this.isLoggedIn = false;
  }
}
