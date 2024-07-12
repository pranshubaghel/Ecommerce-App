// import React, { Component } from 'react';
// import axios from 'axios';
// import { Box, CircularProgress, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
// }

// interface State {
//   product: Product | null;
//   loading: boolean;
// }

// interface ProductDetailProps {
//   id: string;
// }

// class ProductDetail extends Component<ProductDetailProps, State> {
//   state: State = {
//     product: null,
//     loading: true,
//   };

//   componentDidMount() {
//     const { id } = this.props;
//     axios.get(`https://dummyjson.com/products/${id}`)
//       .then(response => {
//         this.setState({
//           product: response.data,
//           loading: false,
//         });
//       })
//       .catch(error => {
//         console.log('error fetching product', error);
//         this.setState({ loading: false });
//       });
//   }
//   // handleAddToCart = () => {
//   //   const { product } = this.state;
//   //   if (product) {
//   //     this.props.onAddToCart(product.id);
//   //   }
//   // };
//   // handleAddToCart = () => {
//   //   const {product} = this.state;
//   //   if(product) {
//   //     this.props.onAddToCart(product.id);
//   //   }
//   // }

//   render() {
//     const { product, loading } = this.state;

//     if (loading) {
//       return <CircularProgress />;
//     }

//     if (!product) {
//       return <Typography variant="h6">Product not found</Typography>;
//     }

//     return (
//       <Box padding={2}>
//         <Card>
//         <CardMedia
//                   component="img"
//                   height="250"
//                   image={product.thumbnail}
//                   alt={product.title}
//                   style={{ objectFit: 'contain' }}
//                 />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {product.title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               {product.description}
//             </Typography>
//             <Typography variant="h6" color="textPrimary">
//               ${product.price}
//             </Typography>
//             <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//               <Button size="large" color="primary" variant="contained">
//                 Add to Cart
//               </Button>
//               <Button size="large" color="secondary" variant="contained">
//                Order Now
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
//     );
//   }
// }

// export default ProductDetail;

import React, { Component } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface State {
  product: Product | null;
  loading: boolean;
}

interface ProductDetailProps {
  id: string;
  onAddToCart: (product: Product) => void;
}

class ProductDetail extends Component<ProductDetailProps, State> {
  state: State = {
    product: null,
    loading: true,
  };

  componentDidMount() {
    const { id } = this.props;
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

  handleAddToCart = () => {
    const { product } = this.state;
    const { onAddToCart } = this.props;
    if (product) {
      onAddToCart(product);
    }
  };

  render() {
    const { product, loading } = this.state;

    if (loading) {
      return <CircularProgress />;
    }

    if (!product) {
      return <Typography variant="h6">Product not found</Typography>;
    }

    return (
      <Box padding={2}>
        <Card>
          <CardMedia
            component="img"
            height="250"
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
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <Button size="large" color="primary" variant="contained" onClick={this.handleAddToCart}>
                Add to Cart
              </Button>
              <Button size="large" color="secondary" variant="contained">
                Order Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default ProductDetail;



