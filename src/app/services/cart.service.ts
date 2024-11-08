import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private restaurantId: number | null = null;  // Track the restaurant for the current cart

  // Add an item to the cart
  addToCart(item: any, restaurantId: number) {
    if (this.restaurantId && this.restaurantId !== restaurantId) {
      alert("You can only order from one restaurant at a time.");
      return;
    }

    this.restaurantId = restaurantId;  // Set the restaurant ID if not set

    // Check if the item already exists in the cart
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * parseInt(existingItem.price.replace('₹', ''), 10);
    } else {
      this.cartItems.push({
        ...item,
        quantity: 1,
        totalPrice: parseInt(item.price.replace('₹', ''), 10)
      });
    }

    return true;
  }

  // Retrieve all cart items
  getCartItems() {
    return this.cartItems;
  }

  // Clear the cart
  clearCart() {
    this.cartItems = [];
    this.restaurantId = null;
  }

  // Calculate total cart value
  getTotalCartValue() {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }
}
