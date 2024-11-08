//  restaurant.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurants = [
    {
      id: 1,
      name: 'A2B',
      cuisine: 'South Indian, Desserts',
      location: 'Anna Nagar',
      imageUrl: 'assets/images/restaurants/a2b.jpeg',
      rating: 4.3,
      deliveryTime: '20-30 mins',
      categories: ['South Indian', 'Desserts'],
      topPicks: [
        {
          name: 'Dosa',
          price: '₹150',
          description: 'Crispy golden dosa served with chutney and sambar',
          imageUrl: 'assets/images/restaurants/a2b1.jpg',
        },
        {
          name: 'Idli',
          price: '₹50',
          description: 'Soft idlis with coconut chutney',
          imageUrl: 'assets/images/restaurants/a2b1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Dosa',
          price: '₹150',
          description: 'Crispy golden dosa served with chutney and sambar',
          imageUrl: 'assets/images/restaurants/a2b1.jpg',
        },
        {
          name: 'Idli',
          price: '₹50',
          description: 'Soft idlis with coconut chutney',
          imageUrl: 'assets/images/restaurants/a2b1.jpg',
        },
        {
          name: 'Pongal',
          price: '₹80',
          description: 'Traditional pongal with ghee',
          imageUrl: 'assets/images/restaurants/a2b1.jpg',
        },
        {
          name: 'Vada',
          price: '₹30',
          description: 'Crispy vadas with sambar',
          imageUrl: 'assets/images/restaurants/a2b1.jpg',
        },
        {
          name: 'Sweet Pongal',
          price: '₹90',
          description: 'Delicious sweet pongal with jaggery',
          imageUrl: 'assets/images/restaurants/a2b1.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Bakingo',
      cuisine: 'Cakes, Desserts',
      location: 'T Nagar',
      imageUrl: 'assets/images/restaurants/bakingo.jpeg',
      rating: 4.5,
      deliveryTime: '25-35 mins',
      categories: ['Cake', 'Desserts'],
      topPicks: [
        {
          name: 'Chocolate Truffle Cake',
          price: '₹500',
          description: 'Rich chocolate cake',
          imageUrl: 'assets/images/restaurants/bakingo1.jpg',
        },
        {
          name: 'Red Velvet Cake',
          price: '₹600',
          description: 'Smooth red velvet with cream cheese frosting',
          imageUrl: 'assets/images/restaurants/bakingo1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Chocolate Truffle Cake',
          price: '₹500',
          description: 'Rich chocolate cake',
          imageUrl: 'assets/images/restaurants/bakingo1.jpg',
        },
        {
          name: 'Red Velvet Cake',
          price: '₹600',
          description: 'Smooth red velvet with cream cheese frosting',
          imageUrl: 'assets/images/restaurants/bakingo1.jpg',
        },
        {
          name: 'Pineapple Cake',
          price: '₹450',
          description: 'Fresh pineapple flavor',
          imageUrl: 'assets/images/restaurants/bakingo1.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'Baskin Robbins',
      cuisine: 'Ice Creams, Desserts',
      location: 'Adyar',
      imageUrl: 'assets/images/restaurants/baskinrobbins.jpeg',
      rating: 4.2,
      deliveryTime: '15-20 mins',
      categories: ['Desserts'],
      topPicks: [
        {
          name: 'Vanilla Ice Cream',
          price: '₹100',
          description: 'Classic vanilla ice cream',
          imageUrl: 'assets/images/restaurants/baskinrobbins1.jpg',
        },
        {
          name: 'Chocolate Ice Cream',
          price: '₹120',
          description: 'Rich chocolate flavor',
          imageUrl: 'assets/images/restaurants/baskinrobbins1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Vanilla Ice Cream',
          price: '₹100',
          description: 'Classic vanilla ice cream',
          imageUrl: 'assets/images/restaurants/baskinrobbins1.jpg',
        },
        {
          name: 'Chocolate Ice Cream',
          price: '₹120',
          description: 'Rich chocolate flavor',
          imageUrl: 'assets/images/restaurants/baskinrobbins1.jpg',
        },
        {
          name: 'Strawberry Ice Cream',
          price: '₹110',
          description: 'Fresh strawberry flavor',
          imageUrl: 'assets/images/restaurants/baskinrobbins1.jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'Belgian Waffle',
      cuisine: 'Waffles, Desserts',
      location: 'Velachery',
      imageUrl: 'assets/images/restaurants/belgianwaffle.jpeg',
      rating: 4.4,
      deliveryTime: '20-25 mins',
      categories: ['Desserts'],
      topPicks: [
        {
          name: 'Classic Waffle',
          price: '₹200',
          description: 'Crispy waffle with syrup',
          imageUrl: 'assets/images/restaurants/belgianwaffle1.jpg',
        },
        {
          name: 'Nutella Waffle',
          price: '₹250',
          description: 'Waffle with Nutella spread',
          imageUrl: 'assets/images/restaurants/belgianwaffle1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Classic Waffle',
          price: '₹200',
          description: 'Crispy waffle with syrup',
          imageUrl: 'assets/images/restaurants/belgianwaffle1.jpg',
        },
        {
          name: 'Nutella Waffle',
          price: '₹250',
          description: 'Waffle with Nutella spread',
          imageUrl: 'assets/images/restaurants/belgianwaffle1.jpg',
        },
        {
          name: 'Chocolate Chip Waffle',
          price: '₹220',
          description: 'Waffle with chocolate chips',
          imageUrl: 'assets/images/restaurants/belgianwaffle1.jpg',
        },
      ],
    },
    {
      id: 5,
      name: 'Burger King',
      cuisine: 'Burgers, Fast Food',
      location: 'Kancheepuram',
      imageUrl: 'assets/images/restaurants/burgerking.jpeg',
      rating: 4.1,
      deliveryTime: '20-30 mins',
      categories: ['Burger', 'Fast Food'],
      topPicks: [
        {
          name: 'Whopper',
          price: '₹300',
          description: 'Signature Whopper with fresh ingredients',
          imageUrl: 'assets/images/restaurants/burgerking1.jpg',
        },
        {
          name: 'Veggie Burger',
          price: '₹200',
          description: 'Delicious vegetarian burger',
          imageUrl: 'assets/images/restaurants/burgerking1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Whopper',
          price: '₹300',
          description: 'Signature Whopper with fresh ingredients',
          imageUrl: 'assets/images/restaurants/burgerking1.jpg',
        },
        {
          name: 'Veggie Burger',
          price: '₹200',
          description: 'Delicious vegetarian burger',
          imageUrl: 'assets/images/restaurants/burgerking1.jpg',
        },
        {
          name: 'Chicken Fries',
          price: '₹150',
          description: 'Crispy chicken fries',
          imageUrl: 'assets/images/restaurants/burgerking1.jpg',
        },
      ],
    },
    {
      id: 6,
      name: 'Dindigul Thalappakatti',
      cuisine: 'Biryani, South Indian',
      location: 'T Nagar',
      imageUrl: 'assets/images/restaurants/dindigul.jpeg',
      rating: 4.3,
      deliveryTime: '30-40 mins',
      categories: ['Biryani', 'South Indian'],
      topPicks: [
        {
          name: 'Mutton Biryani',
          price: '₹350',
          description: 'Authentic Dindigul-style mutton biryani',
          imageUrl: 'assets/images/restaurants/dindigul1.jpg',
        },
        {
          name: 'Chicken Biryani',
          price: '₹300',
          description: 'Flavorful chicken biryani with spices',
          imageUrl: 'assets/images/restaurants/dindigul1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Mutton Biryani',
          price: '₹350',
          description: 'Authentic Dindigul-style mutton biryani',
          imageUrl: 'assets/images/restaurants/dindigul1.jpg',
        },
        {
          name: 'Chicken Biryani',
          price: '₹300',
          description: 'Flavorful chicken biryani with spices',
          imageUrl: 'assets/images/restaurants/dindigul1.jpg',
        },
        {
          name: 'Vegetable Biryani',
          price: '₹250',
          description: 'Biryani with fresh vegetables',
          imageUrl: 'assets/images/restaurants/dindigul1.jpg',
        },
      ],
    },
    {
      id: 7,
      name: "Domino's Pizza",
      cuisine: 'Pizzas, Italian',
      location: 'Sholinganallur',
      imageUrl: 'assets/images/restaurants/dominos.jpeg',
      rating: 4.4,
      deliveryTime: '20-25 mins',
      categories: ['Pizza', 'Italian'],
      topPicks: [
        {
          name: 'Peppy Paneer Pizza',
          price: '₹400',
          description: 'Paneer pizza with capsicum and spices',
          imageUrl: 'assets/images/restaurants/dominos/1.jpg',
        },
        {
          name: 'Veggie Paradise Pizza',
          price: '₹450',
          description: 'Loaded with fresh veggies',
          imageUrl: 'assets/images/restaurants/dominos/2.jpg',
        },
      ],
      recommended: [
        {
          name: 'Peppy Paneer Pizza',
          price: '₹400',
          description: 'Paneer pizza with capsicum and spices',
          imageUrl: 'assets/images/restaurants/dominos/3.jpg',
        },
        {
          name: 'Veggie Paradise Pizza',
          price: '₹450',
          description: 'Loaded with fresh veggies',
          imageUrl: 'assets/images/restaurants/dominos/4.jpg',
        },
        {
          name: 'Margherita Pizza',
          price: '₹350',
          description: 'Classic Margherita with cheese',
          imageUrl: 'assets/images/restaurants/dominos/5.jpg',
        },
      ],
    },
    {
      id: 8,
      name: 'KFC',
      cuisine: 'Fried Chicken, Fast Food',
      location: 'Perumbakkam',
      imageUrl: 'assets/images/restaurants/kfc.jpeg',
      rating: 4.2,
      deliveryTime: '15-20 mins',
      categories: ['Burger', 'Fast Food'],
      topPicks: [
        {
          name: 'Zinger Burger',
          price: '₹250',
          description: 'Crispy chicken fillet with spicy mayo',
          imageUrl: 'assets/images/restaurants/kfc1.jpg',
        },
        {
          name: 'Hot Wings',
          price: '₹200',
          description: 'Spicy fried chicken wings',
          imageUrl: 'assets/images/restaurants/kfc1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Zinger Burger',
          price: '₹250',
          description: 'Crispy chicken fillet with spicy mayo',
          imageUrl: 'assets/images/restaurants/kfc1.jpg',
        },
        {
          name: 'Hot Wings',
          price: '₹200',
          description: 'Spicy fried chicken wings',
          imageUrl: 'assets/images/restaurants/kfc1.jpg',
        },
        {
          name: 'Popcorn Chicken',
          price: '₹150',
          description: 'Bite-sized crispy chicken',
          imageUrl: 'assets/images/restaurants/kfc1.jpg',
        },
      ],
    },
    {
      id: 9,
      name: "La Pino'z Pizza",
      cuisine: 'Pizzas, Italian',
      location: 'Porur',
      imageUrl: 'assets/images/restaurants/lapinos.jpeg',
      rating: 4.1,
      deliveryTime: '25-30 mins',
      categories: ['Pizza', 'Italian'],
      topPicks: [
        {
          name: 'Paneer Tikka Pizza',
          price: '₹450',
          description: 'Spicy paneer with tikka flavor',
          imageUrl: 'assets/images/restaurants/lapinos1.jpg',
        },
        {
          name: 'Cheese Corn Pizza',
          price: '₹400',
          description: 'Loaded with cheese and corn',
          imageUrl: 'assets/images/restaurants/lapinos1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Paneer Tikka Pizza',
          price: '₹450',
          description: 'Spicy paneer with tikka flavor',
          imageUrl: 'assets/images/restaurants/lapinos1.jpg',
        },
        {
          name: 'Cheese Corn Pizza',
          price: '₹400',
          description: 'Loaded with cheese and corn',
          imageUrl: 'assets/images/restaurants/lapinos1.jpg',
        },
        {
          name: 'Mexican Green Wave',
          price: '₹500',
          description: 'Spicy Mexican flavors with jalapenos',
          imageUrl: 'assets/images/restaurants/lapinos1.jpg',
        },
      ],
    },
    {
      id: 10,
      name: 'Lunch Box',
      cuisine: 'North Indian, Chinese',
      location: 'Guindy',
      imageUrl: 'assets/images/restaurants/lunchbox.jpeg',
      rating: 4.0,
      deliveryTime: '25-35 mins',
      categories: ['North Indian', 'Chinese'],
      topPicks: [
        {
          name: 'Paneer Butter Masala',
          price: '₹200',
          description: 'Paneer in rich butter gravy',
          imageUrl: 'assets/images/restaurants/lunchbox1.jpg',
        },
        {
          name: 'Chicken Fried Rice',
          price: '₹180',
          description: 'Fried rice with chicken chunks',
          imageUrl: 'assets/images/restaurants/lunchbox1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Paneer Butter Masala',
          price: '₹200',
          description: 'Paneer in rich butter gravy',
          imageUrl: 'assets/images/restaurants/lunchbox1.jpg',
        },
        {
          name: 'Chicken Fried Rice',
          price: '₹180',
          description: 'Fried rice with chicken chunks',
          imageUrl: 'assets/images/restaurants/lunchbox1.jpg',
        },
        {
          name: 'Dal Tadka',
          price: '₹120',
          description: 'Lentils tempered with spices',
          imageUrl: 'assets/images/restaurants/lunchbox1.jpg',
        },
      ],
    },
    {
      id: 11,
      name: "McDonald's",
      cuisine: 'Burgers, Fast Food',
      location: 'Nehru Nagar',
      imageUrl: 'assets/images/restaurants/mcdonalds.jpeg',
      rating: 4.1,
      deliveryTime: '20-25 mins',
      categories: ['Burger', 'Fast Food'],
      topPicks: [
        {
          name: 'Big Mac',
          price: '₹250',
          description: 'Classic double burger',
          imageUrl: 'assets/images/restaurants/mcdonalds1.jpg',
        },
        {
          name: 'McVeggie',
          price: '₹200',
          description: 'Delicious veggie burger',
          imageUrl: 'assets/images/restaurants/mcdonalds1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Big Mac',
          price: '₹250',
          description: 'Classic double burger',
          imageUrl: 'assets/images/restaurants/mcdonalds1.jpg',
        },
        {
          name: 'McVeggie',
          price: '₹200',
          description: 'Delicious veggie burger',
          imageUrl: 'assets/images/restaurants/mcdonalds1.jpg',
        },
        {
          name: 'Chicken Nuggets',
          price: '₹150',
          description: 'Crispy chicken nuggets',
          imageUrl: 'assets/images/restaurants/mcdonalds1.jpg',
        },
      ],
    },
    {
      id: 12,
      name: 'Taco Bell',
      cuisine: 'Mexican, Tacos',
      location: 'Adyar',
      imageUrl: 'assets/images/restaurants/tacobell.jpeg',
      rating: 4.3,
      deliveryTime: '20-25 mins',
      categories: ['Mexican', 'Fast Food'],
      topPicks: [
        {
          name: 'Crunchy Taco',
          price: '₹120',
          description: 'Crunchy taco with meat and cheese',
          imageUrl: 'assets/images/restaurants/tacobell1.jpg',
        },
        {
          name: 'Bean Burrito',
          price: '₹150',
          description: 'Soft burrito with beans and cheese',
          imageUrl: 'assets/images/restaurants/tacobell1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Crunchy Taco',
          price: '₹120',
          description: 'Crunchy taco with meat and cheese',
          imageUrl: 'assets/images/restaurants/tacobell1.jpg',
        },
        {
          name: 'Bean Burrito',
          price: '₹150',
          description: 'Soft burrito with beans and cheese',
          imageUrl: 'assets/images/restaurants/tacobell1.jpg',
        },
        {
          name: 'Quesadilla',
          price: '₹200',
          description: 'Cheesy quesadilla',
          imageUrl: 'assets/images/restaurants/tacobell1.jpg',
        },
      ],
    },
    {
      id: 13,
      name: 'The Good Bowl',
      cuisine: 'Bowls, Healthy',
      location: 'Teynampet',
      imageUrl: 'assets/images/restaurants/thegoodbowl.jpeg',
      rating: 4.2,
      deliveryTime: '20-25 mins',
      categories: ['Healthy', 'Bowls'],
      topPicks: [
        {
          name: 'Chicken Rice Bowl',
          price: '₹250',
          description: 'Rice bowl with grilled chicken',
          imageUrl: 'assets/images/restaurants/thegoodbowl1.jpg',
        },
        {
          name: 'Veggie Quinoa Bowl',
          price: '₹220',
          description: 'Quinoa with fresh veggies',
          imageUrl: 'assets/images/restaurants/thegoodbowl1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Chicken Rice Bowl',
          price: '₹250',
          description: 'Rice bowl with grilled chicken',
          imageUrl: 'assets/images/restaurants/thegoodbowl1.jpg',
        },
        {
          name: 'Veggie Quinoa Bowl',
          price: '₹220',
          description: 'Quinoa with fresh veggies',
          imageUrl: 'assets/images/restaurants/thegoodbowl1.jpg',
        },
        {
          name: 'Pasta Bowl',
          price: '₹200',
          description: 'Pasta with fresh veggies and herbs',
          imageUrl: 'assets/images/restaurants/thegoodbowl1.jpg',
        },
      ],
    },
    {
      id: 14,
      name: 'Wow! Momo',
      cuisine: 'Momos, Chinese',
      location: 'Nungambakkam',
      imageUrl: 'assets/images/restaurants/wowmomo.jpeg',
      rating: 4.4,
      deliveryTime: '15-20 mins',
      categories: ['Momo', 'Chinese'],
      topPicks: [
        {
          name: 'Steamed Momo',
          price: '₹120',
          description: 'Soft steamed momos',
          imageUrl: 'assets/images/restaurants/wowmomo1.jpg',
        },
        {
          name: 'Fried Momo',
          price: '₹140',
          description: 'Crispy fried momos',
          imageUrl: 'assets/images/restaurants/wowmomo1.jpg',
        },
      ],
      recommended: [
        {
          name: 'Steamed Momo',
          price: '₹120',
          description: 'Soft steamed momos',
          imageUrl: 'assets/images/restaurants/wowmomo1.jpg',
        },
        {
          name: 'Fried Momo',
          price: '₹140',
          description: 'Crispy fried momos',
          imageUrl: 'assets/images/restaurants/wowmomo1.jpg',
        },
        {
          name: 'Schezwan Momo',
          price: '₹150',
          description: 'Spicy Schezwan style momos',
          imageUrl: 'assets/images/restaurants/wowmomo1.jpg',
        },
      ],
    },
    // Add more restaurants as needed
  ];

  // Retrieve all restaurants
  getRestaurants() {
    return this.restaurants;
  }

  // Retrieve a single restaurant by ID
  getRestaurantById(id: number) {
    return this.restaurants.find((restaurant) => restaurant.id === id);
  }
}
