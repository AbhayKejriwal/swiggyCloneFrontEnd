// food.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodItems = [
    { name: 'Biryani', imgUrl: 'assets/images/foodItems/biryani.jpeg' },
    { name: 'Burger', imgUrl: 'assets/images/foodItems/burger.jpeg' },
    { name: 'Cake' , imgUrl: 'assets/images/foodItems/cake.jpeg' },
    { name: 'Chinese', imgUrl: 'assets/images/foodItems/chinese.jpeg' },
    { name: 'Momo', imgUrl: 'assets/images/foodItems/momo.jpeg' },
    { name: 'Noodle', imgUrl: 'assets/images/foodItems/noodle.jpeg' },
    { name: 'Pasta', imgUrl: 'assets/images/foodItems/pasta.jpeg' },
    { name: 'Pav Bhaji', imgUrl: 'assets/images/foodItems/pavbhaji.jpeg' },
    { name: 'Pizza', imgUrl: 'assets/images/foodItems/pizza.jpeg' },
    { name: 'Roll', imgUrl: 'assets/images/foodItems/roll.png' },
    { name: 'Samosa', imgUrl: 'assets/images/foodItems/samosa.jpeg' },
    { name: 'South Indian', imgUrl: 'assets/images/foodItems/southindian.jpeg' },
    // Add more food items as needed
  ];

  // Retrieve the list of food categories
  getFoodItems() {
    return this.foodItems;
  }
}
