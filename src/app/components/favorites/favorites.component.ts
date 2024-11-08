import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MenuCardComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  // Method to toggle favorite status
  toggleFavorite(item: any): void {
    this.favoritesService.removeFavorite(item);
    this.favorites = this.favoritesService.getFavorites();
    alert(`${item.name} removed from favorites!`);
  }
}
