'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import share from '@/app/assets/icons/share.svg';
import compare from '@/app/assets/icons/compare.svg';
import likeSmall from '@/app/assets/icons/like-small.svg';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

const Section3 = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://ecommerce-backend-fawn-eight.vercel.app/api/products'
        );
        const data = await response.json();
        setProducts(data.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatPrice = (price: number) => {
    return price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  };

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const isProductInCart = cart.some((item: any) => item._id === product._id);

    if (isProductInCart) {
      toast.info('Product is already in the cart');
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      toast.success('Product added to cart');
    }
  };

  return (
    <div className="container mx-auto py-[60px]">
      <ToastContainer />
      <div className="text-center pb-[60px]">
        <h2 className="text-[32px] font-bold">Our Products</h2>
        <p className="text-[20px] text-[#666666]">
          Check out our latest products below.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[32px]">
        {loading ? (
          <LoadingSpinner />
        ) : (
          products.map((product: any) => (
            <Link href={`/shop/${product._id}`} key={product._id}>
              <div className="relative text-start cursor-pointer h-[450px] w-[300px] rounded-[5px] shadow-lg overflow-hidden">
                <picture>
                  <img
                    className="w-full h-[300px] rounded-t-[5px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={product.image}
                    alt={product.title}
                  />
                </picture>
                <div className="p-[15px] bg-[#F4F5F7] h-[150px] flex flex-col gap-[8px]">
                  <h3 className="text-[24px] font-[600] text-[#3A3A3A]">
                    {product.title}
                  </h3>
                  <p className="text-[16px] font-[500] text-[#888888]">
                    {product.subtitle}
                  </p>
                  <p className="text-[20px] font-[600] text-[#3A3A3A]">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <div className="absolute flex flex-col gap-5 inset-0 items-center justify-center bg-[#00000080] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button
                    className="text-[#B88E2F] w-[202px] font-bold py-2 px-4 bg-white rounded-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                  <div className='flex items-center gap-3'>
                    <p className='text-white flex gap-1'>
                      <Image src={share} alt="share" width={20} height={20} style={{ width: 'auto', height: 'auto' }}/> Share
                    </p>
                    <p className='text-white flex gap-1'>
                      <Image src={compare} alt="compare" width={20} height={20} style={{ width: 'auto', height: 'auto' }}/> Compare
                    </p>
                    <p className='text-white flex gap-1'>
                      <Image src={likeSmall} alt="like" width={20} height={20} style={{ width: 'auto', height: 'auto' }}/> Like
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className='text-center'>
        <button className='border-[1px] border-[#B88E2F] w-[250px] h-[50px] text-[#B88E2F] rounded-[5px] font-semibold mt-[35px]'>
          <Link href="/shop">Show More</Link>
        </button>
      </div>
    </div>
  );
};

export default Section3;
