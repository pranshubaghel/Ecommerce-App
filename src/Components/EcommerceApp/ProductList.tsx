
// import React, { Component } from 'react';
// import axios from 'axios';
// import { Box, CircularProgress, Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
// import { Link } from 'react-router-dom';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
// }

// interface State {
//   products: Product[];
//   loading: boolean;
//   favorites: number[];
// }

// export default class ProductList extends Component<{}, State> {
//   state: State = {
//     products: [],
//     loading: true,
//     favorites: [],
//   };

//   componentDidMount() {
//     axios.get('https://dummyjson.com/products')
//       .then(response => {
//         this.setState({
//           products: response.data.products,
//           loading: false,
//         });
//       })
//       .catch(error => {
//         console.log('error fetching products', error);
//         this.setState({ loading: false });
//       });
//   }

//   handleFavoriteToggle = (productId: number) => {
//     this.setState(prevState => {
//       const favorites = prevState.favorites.includes(productId)
//         ? prevState.favorites.filter(id => id !== productId)
//         : [...prevState.favorites, productId];
//       return { favorites };
//     });
//   };

//   render() {
//     const { products, loading, favorites } = this.state;

//     if (loading) {
//       return <CircularProgress />;
//     }

//     return (
//       <Box padding={2}>
//         <Grid container spacing={2}>
//           {products.map(product => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #ccc' }}>
//               <CardMedia
//                   component="img"
//                   height="140"
//                   image={product.thumbnail}
//                   alt={product.title}
//                   style={{ objectFit: 'contain' }}
//                 />
//                <CardContent style={{ flexGrow: 1 }}>
//                   <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Typography gutterBottom variant="h5" component="div">
//                       {product.title}
//                     </Typography>
//                     <IconButton onClick={() => this.handleFavoriteToggle(product.id)}>
//                       {favorites.includes(product.id) ? (
//                         <FavoriteIcon color="error" />
//                       ) : (
//                         <FavoriteBorderIcon />
//                       )}
//                     </IconButton>
//                   </Box>
//                   <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Typography variant="body2" color="textSecondary">
//                       {product.description}
//                     </Typography>
//                   </Link>
//                   <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="auto">
//                     <Typography variant="body2" color="textPrimary">
//                       ${product.price}
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   }
// }
import React, { Component } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface Props {
  favoriteItems: number[];

  onFavoriteToggle: (productId: number) => void;
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
    const { favoriteItems, onFavoriteToggle } = this.props;

    if (loading) {
      return <CircularProgress />;
    }

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
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <IconButton onClick={() => onFavoriteToggle(product.id)}>
                      {favoriteItems.includes(product.id) ? (
                        <FavoriteIcon color="error" />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </Box>
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                  </Link>
                  <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="auto">
                    <Typography variant="body2" color="textPrimary">
                      ${product.price}
                    </Typography>
                    {/* <IconButton onClick={onAddToCart}>
                      <AddShoppingCartIcon />
                    </IconButton> */}
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





