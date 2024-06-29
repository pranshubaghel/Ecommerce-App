import React, { FC } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface HeaderProps {
  cartItems: number;
  favoriteItems: number;
}

const Header: FC<HeaderProps> = ({ cartItems, favoriteItems }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src="https://img.freepik.com/premium-vector/bag-shop-gradient-colorful-logo-vector-icon-illustration_269830-2269.jpg?w=740"
            alt="Logo"
            style={{ height: 40, marginRight: 10 }}
          />
        </Typography>
        <IconButton color="inherit">
          Login
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={cartItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={favoriteItems} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
