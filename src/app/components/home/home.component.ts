// home.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { RestaurantService } from '../../services/restaurant.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodItems: any[] = [];
  restaurants: any[] = [];
  filteredRestaurants: any[] = [];

  constructor(private foodService: FoodService, private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.foodItems = this.foodService.getFoodItems();
    this.restaurants = this.restaurantService.getRestaurants();
    this.filteredRestaurants = this.restaurants; // Display all restaurants initially
  }

  onFoodCategoryClick(category: string) {
    console.log(`Selected category: ${category}`);
    this.filteredRestaurants = this.restaurants.filter(restaurant =>
      restaurant.categories.includes(category)
    );
  }
  
  resetFilter() {
    this.filteredRestaurants = this.restaurants;
  }  
}
