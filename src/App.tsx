import React, { Component } from 'react';
import Header from './Components/EcommerceApp/Header'; // Adjust the import path as necessary
import ProductList from './Components/EcommerceApp/ProductList'; // Adjust the import path as necessary
import { Box } from '@mui/material';
import HeroSection from './Components/EcommerceApp/HeroSection';

interface State {
  cartItems: number;
  favoriteItems: number;
}

class App extends Component<{}, State> {
  state: State = {
    cartItems: 0,
    favoriteItems: 0,
  };

  handleAddToCart = () => {
    this.setState((prevState) => ({ cartItems: prevState.cartItems + 1 }));
  };

  handleAddToFavorite = () => {
    this.setState((prevState) => ({ favoriteItems: prevState.favoriteItems + 1 }));
  };

  render() {
    const { cartItems, favoriteItems } = this.state;

    return (
      <div>
        <Header cartItems={cartItems} favoriteItems={favoriteItems} />
        <HeroSection/>
        <Box padding={2}>
          <ProductList onAddToCart={this.handleAddToCart} onAddToFavorite={this.handleAddToFavorite} />
        </Box>
        
      </div>
    );
  }
}

export default App;
