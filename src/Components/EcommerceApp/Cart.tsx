import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography,Button } from '@mui/material';
import { Product } from './ProductDetail';

interface CartProps {
  cartItems: Product[];
  onRemoveFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  return (
    <Box padding={2}>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        cartItems.map((product) => (
          <Card key={product.id} sx={{ mb: 2 }}>
            <CardMedia
              component="img"
              height="150"
              image={product.thumbnail}
              alt={product.title}
              style={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="textPrimary">
                ${product.price}
              </Typography>
            </CardContent>
            <Box>
                <Button size="large" color="primary" variant="contained" style={{marginLeft: 6,marginBottom:2}}
                  onClick={() => onRemoveFromCart(product.id)}>
                
                  Remove
              </Button>
           
                </Box>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Cart;
