// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalCartValue: number = 0;

  constructor(private cartService: CartService) {}

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
    alert("Checkout complete!");
    this.cartService.clearCart();
    this.loadCartItems();
  }
}
