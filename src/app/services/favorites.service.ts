// favorites.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  // Add an item to favorites
  addFavorite(item: any) {
    if (!this.favorites.includes(item)) {
      item.isFavorite = true;
      this.favorites.push(item);
    }
  }

  // Remove an item from favorites
  removeFavorite(item: any) {
    item.isFavorite = false;
    this.favorites = this.favorites.filter(fav => fav !== item);
  }

  // Retrieve all favorite items
  getFavorites() {
    return this.favorites;
  }
}
