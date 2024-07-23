'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import filter from '@/app/assets/icons/filter.svg';
import filter1 from '@/app/assets/icons/filter1.svg';
import filter2 from '@/app/assets/icons/filter2.svg';
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

const Section2Shop = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://ecommerce-backend-fawn-eight.vercel.app/api/products'
        );
        const data = await response.json();
        setProducts(data.slice(0, 16));
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
    <div>
      <ToastContainer />
      <div className="bg-[#F9F1E7] w-[100%]">
        <div className="container mx-auto flex items-center justify-between h-[100px]">
          <div className="flex items-center gap-[20px]">
            <p className="flex items-center gap-[15px] text-[20px]">
              <Image src={filter} alt="filter" width={20} height={20} style={{ width: 'auto', height: 'auto' }}/> Filter
            </p>
            <Image src={filter1} alt="filter" width={20} height={20} style={{ width: 'auto', height: 'auto' }}/>
            <Image src={filter2} alt="filter" width={20} height={20} style={{ width: 'auto', height: 'auto' }}/>
            <p className="text-[16px] mx-4 px-[34px] border-l-[2px] border-[#9F9F9F]">
              Showing 1–16 of {products.length} results
            </p>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="flex gap-[17px] items-center">
              <label className="text-[20px]" htmlFor="show">Show</label>
              <input className="h-[55px] w-[55px] pl-[18px] text-[20px] outline-none" type="text" placeholder="16" />
            </div>
            <div className="flex gap-[17px] items-center">
              <label className="text-[20px]" htmlFor="shortBy">Short By</label>
              <input className="h-[55px] w-[188px] p-[30px] text-[20px] outline-none" type="text" placeholder="Default" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-[60px]">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-4 gap-[32px]">
            {products.map((product: any) => (
              <Link href={`/shop/${product._id}`} key={product._id}>
                <div className="relative text-start cursor-pointer h-[450px] w-[300px] rounded-[5px] shadow-lg overflow-hidden">
                  <img
                    className="w-full h-[300px] rounded-t-[5px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={product.image}
                    alt={product.title}
                  />
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2Shop;
