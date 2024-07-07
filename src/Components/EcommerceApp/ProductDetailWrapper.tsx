import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const ProductDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <ProductDetail id={id!} />;
};

export default ProductDetailWrapper;
