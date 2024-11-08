// navbar.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.getLoginStatus();
  }

  login() {
    if (!this.isLoggedIn) {
      const username = prompt('Enter username:');
      const password = prompt('Enter password:');
      if (username && password) {
        this.authService.login(username, password).subscribe((success) => {
          if (success) {
            this.isLoggedIn = true;
          } else {
            alert('Invalid credentials!');
          }
        });
      }
    } else {
      this.authService.logout();
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    }
  }

  register() {
    const username = prompt('Choose a username:');
    const password = prompt('Choose a password:');
    if (username && password) {
      this.authService.register(username, password).subscribe((user) => {
        if (user) {
          alert('Registration successful! You can now log in.');
        }
      });
    }
  }
}
