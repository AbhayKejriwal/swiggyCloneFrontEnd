// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'restaurant/:id', component: RestaurantComponent }, // Dynamic route for individual restaurants
    { path: '**', redirectTo: '' }, // Redirect unknown routes to Home
];
