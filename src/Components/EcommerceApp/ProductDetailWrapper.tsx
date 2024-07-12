// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ProductDetail from './ProductDetail';

// const ProductDetailWrapper: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   return <ProductDetail id={id!} />;
// };

// export default ProductDetailWrapper;
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail, { Product } from './ProductDetail';

interface ProductDetailWrapperProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetailWrapper: React.FC<ProductDetailWrapperProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();

  return (
    <ProductDetail id={id!} onAddToCart={onAddToCart} />
  );
};

export default ProductDetailWrapper;



