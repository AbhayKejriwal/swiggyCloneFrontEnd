import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {  
  isLoggedIn = false;

  login() {
    if (!this.isLoggedIn) {
      // Perform login logic here
      this.isLoggedIn = true;
    } else {
      // Log out functionality
      this.isLoggedIn = false;
    }
  }
  
}
