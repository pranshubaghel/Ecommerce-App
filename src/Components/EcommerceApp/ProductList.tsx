import React, { Component } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface Props {
  onAddToCart: () => void;
  onAddToFavorite: () => void;
}

interface State {
  products: Product[];
  loading: boolean;
}

export default class ProductList extends Component<Props, State> {
  state: State = {
    products: [],
    loading: true,
  };

  componentDidMount() {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        this.setState({
          products: response.data.products,
          loading: false,
        });
      })
      .catch(error => {
        console.log('error fetching products', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { products, loading } = this.state;
    const { onAddToCart, onAddToFavorite } = this.props;

    if (loading) {
      return <CircularProgress />;
    }

    return (
      <Box padding={2}>
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.thumbnail}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="textPrimary">
                      ${product.price}
                    </Typography>
                    <Button size="small" color="primary" variant="contained" onClick={onAddToCart}>
                      Add to Cart
                    </Button>
                    <Box ml={1}>
                      <Button size="small" color="secondary" variant="outlined" onClick={onAddToFavorite}>
                        Favorite
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}