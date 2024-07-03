// import React, { Component } from 'react';
// import Header from './Components/EcommerceApp/Header'; // Adjust the import path as necessary
// import ProductList from './Components/EcommerceApp/ProductList'; // Adjust the import path as necessary
// import { Box } from '@mui/material';
// import HeroSection from './Components/EcommerceApp/HeroSection';

// interface State {
//   cartItems: number;
//   favoriteItems: number;
// }

// class App extends Component<{}, State> {
//   state: State = {
//     cartItems: 0,
//     favoriteItems: 0,
//   };

//   handleAddToCart = () => {
//     this.setState((prevState) => ({ cartItems: prevState.cartItems + 1 }));
//   };

//   handleAddToFavorite = () => {
//     this.setState((prevState) => ({ favoriteItems: prevState.favoriteItems + 1 }));
//   };

//   render() {
//     const { cartItems, favoriteItems } = this.state;

//     return (
//       <div>
//         <Header cartItems={cartItems} favoriteItems={favoriteItems} />
//         <HeroSection/>
//         <Box padding={2}>
//           <ProductList onAddToCart={this.handleAddToCart} onAddToFavorite={this.handleAddToFavorite} />
//         </Box>
        
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Components/EcommerceApp/ProductList';
import ProductDetail from './Components/EcommerceApp/ProductDetail';
import Header from './Components/EcommerceApp/Header';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface State {
  cart: Product[];
  favorites: Product[];
}

export default class App extends Component<{}, State> {
  state: State = {
    cart: [],
    favorites: [],
  };

  handleAddToCart = (product: Product) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, product],
    }));
  };

  handleAddToFavorite = (product: Product) => {
    this.setState(prevState => ({
      favorites: [...prevState.favorites, product],
    }));
  };

  render() {
    return (
      <Router>
        <Header cartItems={this.state.cart.length} favoriteItems={this.state.favorites.length} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                onAddToCart={this.handleAddToCart}
                onAddToFavorite={this.handleAddToFavorite}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                onAddToCart={this.handleAddToCart}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}








