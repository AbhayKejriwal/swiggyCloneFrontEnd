// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://67176745b910c6a6e027f2f6.mockapi.io/users';
  private isLoggedIn = false;
  private loggedInUser: any = null;

  constructor(private http: HttpClient) {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = storedLoginState === 'true';
    this.loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || 'null'
    );
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`).pipe(
      map((users) => {
        if (users.length > 0 && users[0].password === password) {
          this.isLoggedIn = true;
          this.loggedInUser = users[0];
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem(
            'loggedInUser',
            JSON.stringify(this.loggedInUser)
          );
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    const newUser = { username, password };
    return this.http.post(this.apiUrl, newUser).pipe(
      map((user) => {
        console.log('User registered:', user);
        return user;
      }),
      catchError((error) => {
        console.error('Registration error:', error);
        return of(null);
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.loggedInUser = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }

  // auth.service.ts
  getUserId(): string | null {
    return this.loggedInUser ? this.loggedInUser.id : null;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
}
