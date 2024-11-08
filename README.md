<<<<<<< HEAD
# Swiggy Clone (Front-End Only) - Angular Project

## Project Overview

This project is a front-end-only Swiggy clone developed using Angular. It aims to replicate the essential user interface and interactions of a food discovery platform. The application displays featured restaurants, menus, and popular cuisines, and allows users to search, add items to favorites, manage a cart, and simulate an order process. Static data simulates the restaurant information and menu items, while mock API interactions simulate authentication and order storage.

## Project Structure

```
src/
└── app/
    ├── components/
    │   ├── cart/                # Cart component for displaying cart items and total
    │   ├── favorites/           # Favorites component for showing saved items
    │   ├── footer/              # Footer component for additional information or links
    │   ├── home/                # Home component displaying featured restaurants and cuisines
    │   ├── menu-card/           # Component for individual menu item display
    │   ├── navbar/              # Navbar component for navigation
    │   └── restaurant/          # Restaurant component showing details and menu items
    ├── services/
    │   ├── auth.service.ts      # Service handling user authentication
    │   ├── cart.service.ts      # Service managing cart items and total cost
    │   ├── favorites.service.ts # Service managing user's favorite items
    │   ├── food.service.ts      # Service for static food data management
    │   ├── order.service.ts     # Service simulating order placement in mock API
    │   └── restaurant.service.ts # Service for managing restaurant and menu data
    ├── app.component.css        # Global styles for the app
    ├── app.component.html       # Main application template
    ├── app.component.ts         # Root application component
    ├── app.routes.ts            # Route configurations for navigation
    └── assets/                  # Assets like icons and images
```

## Components

### 1. **Home Component**
   - Displays a list of popular cuisines and featured restaurants on the homepage.
   - Users can filter restaurants based on a particular cuisine.
   - Data is fetched from `FoodService` and `RestaurantService`.

### 2. **Navbar Component**
   - Provides navigation links to the Home, Favorites, Cart, and other sections of the application.

### 3. **Restaurant Component**
   - Shows detailed information about a selected restaurant.
   - Displays a list of menu items for each restaurant with an "Add to Cart" and "Favorite" option.
   - Utilizes route parameters to load specific restaurant data.

### 4. **Menu-Card Component**
   - Reusable component to display individual menu items.

### 5. **Cart Component**
   - Displays items added to the cart with the total price.
   - Allows users to manage the cart by viewing, updating, or removing items.

### 6. **Favorites Component**
   - Shows a list of items or restaurants marked as favorites by the user.
   - Allows users to add or remove items from the favorites list.

### 7. **Footer Component**
   - Provides additional information or links at the bottom of the page.

=======
Here’s a README file for your Swiggy Clone project, explaining the project structure and components. You can add additional details as needed.

---

# Swiggy Clone (Front-End Only) - Angular Project

## Project Overview

This project is a front-end-only Swiggy clone developed using Angular. It aims to replicate the essential user interface and interactions of a food discovery platform. The application displays featured restaurants, menus, and popular cuisines, and allows users to search, add items to favorites, manage a cart, and simulate an order process. Static data simulates the restaurant information and menu items, while mock API interactions simulate authentication and order storage.

## Project Structure

```
src/
└── app/
    ├── components/
    │   ├── cart/                # Cart component for displaying cart items and total
    │   ├── favorites/           # Favorites component for showing saved items
    │   ├── footer/              # Footer component for additional information or links
    │   ├── home/                # Home component displaying featured restaurants and cuisines
    │   ├── menu-card/           # Component for individual menu item display
    │   ├── navbar/              # Navbar component for navigation
    │   └── restaurant/          # Restaurant component showing details and menu items
    ├── services/
    │   ├── auth.service.ts      # Service handling user authentication
    │   ├── cart.service.ts      # Service managing cart items and total cost
    │   ├── favorites.service.ts # Service managing user's favorite items
    │   ├── food.service.ts      # Service for static food data management
    │   ├── order.service.ts     # Service simulating order placement in mock API
    │   └── restaurant.service.ts # Service for managing restaurant and menu data
    ├── app.component.css        # Global styles for the app
    ├── app.component.html       # Main application template
    ├── app.component.ts         # Root application component
    ├── app.routes.ts            # Route configurations for navigation
    └── assets/                  # Assets like icons and images
```

## Components

### 1. **Home Component**
   - Displays a list of featured restaurants and popular cuisines on the homepage.
   - Includes a search bar to filter restaurants by name.
   - Data is fetched from `FoodService`.

### 2. **Navbar Component**
   - Provides navigation links to the Home, Favorites, Cart, and other sections of the application.

### 3. **Restaurant Component**
   - Shows detailed information about a selected restaurant.
   - Displays a list of menu items for each restaurant with an "Add to Cart" option.
   - Utilizes route parameters to load specific restaurant data.

### 4. **Menu-Card Component**
   - Reusable component to display individual menu items.

### 5. **Cart Component**
   - Displays items added to the cart with the total price.
   - Allows users to manage the cart by viewing, updating, or removing items.

### 6. **Favorites Component**
   - Shows a list of items or restaurants marked as favorites by the user.
   - Allows users to add or remove items from the favorites list.

### 7. **Footer Component**
   - Provides additional information or links at the bottom of the page.

>>>>>>> 78f3557a3e6fc57b897d563040a4b7bb0e495b9e
## Services

### 1. **AuthService**
   - Handles user authentication using mock API for login and logout functionalities.

### 2. **CartService**
   - Manages items in the cart, keeps track of quantities, and calculates the total cost.

### 3. **FavoritesService**
   - Stores and retrieves favorite items, simulating session-based storage.

### 4. **FoodService**
   - Provides static data for featured restaurants, cuisines, and menu items.

### 5. **OrderService**
   - Simulates order placement and retrieval of order history using mock API.

### 6. **RestaurantService**
   - Manages data for restaurant details and menu items, including fetching and organizing static restaurant data.

## Key Features

<<<<<<< HEAD
- **Homepage**: Displays featured restaurants and popular cuisines.
=======
- **Homepage**: Displays featured restaurants, popular cuisines, and a search bar.
>>>>>>> 78f3557a3e6fc57b897d563040a4b7bb0e495b9e
- **Favorites**: Allows users to add and view favorite items.
- **Cart Simulation**: Users can add items to the cart, view the total, and manage cart contents.
- **Static Data Management**: Uses Angular services for data storage and session management.
- **Authentication**: Simulated user authentication with mock API.
- **Responsive Design**: Supports both mobile and desktop views using Tailwind CSS.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   ng serve
   ```
<<<<<<< HEAD
3. Open [http://localhost:4200](http://localhost:4200) in your browser to view the application.
=======
3. Open [http://localhost:4200](http://localhost:4200) in your browser to view the application.

---

This README provides an overview of the project structure, components, services, and setup instructions. Let me know if you'd like to add more details or specific descriptions.
>>>>>>> 78f3557a3e6fc57b897d563040a4b7bb0e495b9e
