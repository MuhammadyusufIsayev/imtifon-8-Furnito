import React from 'react';
import SingleProduct from './SingleProduct';

interface Params {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const res = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
  const products = await res.json();

  return products.map((product: any) => ({
    id: product._id,
  }));
}

const ProductPage = ({ params }: Params) => {
  return <SingleProduct id={params.id} />;
};

export default ProductPage;
