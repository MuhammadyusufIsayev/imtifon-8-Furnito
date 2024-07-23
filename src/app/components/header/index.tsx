'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icons/cart.svg";
import heart from "../../assets/icons/heart.svg";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

type Product = {
  _id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    if (isModalOpen) {
      const storedCartItems = JSON.parse(localStorage.getItem("cart") || '[]') as Product[];
      setCartItems(storedCartItems);
      document.body.classList.add('no-scroll'); 
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const removeFromCart = (id: string) => {
    const updatedCartItems = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <div className={`${poppins.className} container mx-auto h-[100px] flex justify-between items-center relative`}>
      <Link href='/'><Image src={logo} alt="logo" /></Link>
      <ul className="flex items-center gap-[75px]">
        <Link className="text-[16px] font-[500]" href="/">Home</Link>
        <Link className="text-[16px] font-[500]" href="/shop">Shop</Link>
        <Link className="text-[16px] font-[500]" href="/about">About</Link>
        <Link className="text-[16px] font-[500]" href="/contact">Contact</Link>
        <Link className="text-[16px] font-[500]" href="/comparison">Comparison</Link>
      </ul>
      <div className="flex items-center gap-[45px]">
        <Image src={user} alt="user" />
        <Image src={search} alt="search" />
        <Image src={heart} alt="heart" />
        <Image src={cart} alt="cart" onClick={toggleModal} className="cursor-pointer" />
      </div>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleModal}></div>
          <div className="fixed right-0 top-0 h-[800px] z-20 w-[400px] bg-white shadow-lg flex flex-col justify-between">
            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-semibold pb-4 mb-4 border-b-[1px]">Shopping Cart</h2>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <li key={item._id} className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <picture>
                          <img src={item.image} alt={item.title} className="w-[100px] h-[100px] object-cover rounded-[10px]" />
                        </picture>
                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p>Rs. {item.price}</p>
                        </div>
                      </div>
                      <FaTimes className="cursor-pointer text-[20px] text-white bg-gray-500 p-[5px] rounded-full" onClick={() => removeFromCart(item._id)} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="p-6 border-t border-gray-300">
              <p className="text-lg font-bold flex items-center justify-between">Subtotal: <span className="text-[#B88E2F]">Rs. {cartItems.reduce((acc, item) => acc + item.price, 0)}</span></p>
              <div className="flex gap-4 mt-4">
                <button onClick={toggleModal} className="px-4 py-2 border-[1px] border-[#000000] rounded-full">
                  <Link href="/cart">Cart</Link>
                </button>
                <button onClick={toggleModal} className="px-4 py-2 border-[1px] border-[#000000] rounded-full">
                  <Link href="/checkout">Checkout</Link>
                </button>
                <button className="px-4 py-2 border-[1px] border-[#000000] rounded-full">Comparison</button>
              </div>
            </div>
            <button onClick={toggleModal} className="absolute text-[20px] top-5 right-5 text-gray-500">
              <FaTimes />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
