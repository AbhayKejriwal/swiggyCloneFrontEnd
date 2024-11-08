// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalCartValue: number = 0;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
    this.totalCartValue = this.cartService.getTotalCartValue();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCartItems();
  }

  checkout() {
    if (!this.authService.getLoginStatus()) {
      alert('Please log in to proceed with checkout.');
      return;
    }

    const userId = this.authService.getUserId();
    if (!userId) {
      alert('Error: User ID not found.');
      return;
    }

    const orderData = {
      userId: userId,
      items: this.cartItems,
      total: this.totalCartValue,
      date: new Date().toISOString(),
    };

    this.orderService.submitOrder(orderData).subscribe(
      (response) => {
        alert('Order placed successfully!');
        this.cartService.clearCart();
        this.loadCartItems();
      },
      (error) => {
        console.error('Order submission error:', error);
        alert('Failed to place the order. Please try again.');
      }
    );
  }
}
