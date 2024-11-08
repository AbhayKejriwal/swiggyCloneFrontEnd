// restaurant.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { CartService } from '../../services/cart.service';
import { FavoritesService } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, MenuCardComponent],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  restaurant: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    // Get the restaurant ID from the route parameters
    const restaurantId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch restaurant details using the service
    this.restaurant = this.restaurantService.getRestaurantById(restaurantId);
  }

  // Method to add an item to the cart

  addToCart(item: any): void {
    const restaurantId = this.restaurant.id; // Assuming `restaurant` has an `id` property
    const itemAdded = this.cartService.addToCart(item, restaurantId);
    if (itemAdded) {
      alert(`${item.name} added to cart!`);
    }
  }

  // Method to toggle favorite status
  toggleFavorite(item: any): void {
    if (this.favoritesService.getFavorites().includes(item)) {
      this.favoritesService.removeFavorite(item);
      alert(`${item.name} removed from favorites!`);
    } else {
      this.favoritesService.addFavorite(item);
      alert(`${item.name} added to favorites!`);
    }
  }
}
