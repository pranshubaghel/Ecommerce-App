import React, { Component } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface FavoritesProps {
  favoriteItems: number[];
}

interface State {
  products: Product[];
}

class Favorites extends Component<FavoritesProps, State> {
  state: State = {
    products: [],
  };

  componentDidMount() {
    this.fetchFavoriteProducts();
  }

  componentDidUpdate(prevProps: FavoritesProps) {
    if (prevProps.favoriteItems !== this.props.favoriteItems) {
      this.fetchFavoriteProducts();
    }
  }

  fetchFavoriteProducts() {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const favoriteProducts = response.data.products.filter((product: Product) =>
          this.props.favoriteItems.includes(product.id)
        );
        this.setState({ products: favoriteProducts });
      })
      .catch(error => {
        console.log('error fetching products', error);
      });
  }

  render() {
    const { products } = this.state;

    return (
      <Box padding={2}>
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #ccc' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.thumbnail}
                  alt={product.title}
                  style={{ objectFit: 'contain' }}
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textPrimary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Favorites;
