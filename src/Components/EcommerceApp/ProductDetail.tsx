import React, { Component } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { RouteComponentProps } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  onAddToCart: (product: Product) => void;
}

interface State {
  product: Product | null;
  loading: boolean;
}

export default class ProductDetail extends Component<Props, State> {
  state: State = {
    product: null,
    loading: true,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        this.setState({
          product: response.data,
          loading: false,
        });
      })
      .catch(error => {
        console.log('error fetching product', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { product, loading } = this.state;
    const { onAddToCart } = this.props;

    if (loading) {
      return <CircularProgress />;
    }

    if (!product) {
      return <Typography>Product not found</Typography>;
    }

    return (
      <Box padding={2}>
        <Card>
          <CardMedia
            component="img"
            height="300"
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
            <Typography variant="body2" color="textPrimary">
              ${product.price}
            </Typography>
            <Button size="large" color="primary" variant="contained" onClick={() => onAddToCart(product)}>
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }
}
