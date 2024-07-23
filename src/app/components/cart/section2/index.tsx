'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Section2Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      const parsedItems = JSON.parse(storedCartItems).map((item: any) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCartItems(parsedItems);
    }
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const removeFromCart = (id: any) => {
    const updatedCartItems = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const updateQuantity = (id: any, quantity: any) => {
    const updatedCartItems = cartItems.map(item =>
      item._id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="container mx-auto py-10 flex flex-col lg:flex-row justify-between">
      <table className="w-full lg:w-2/3 bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F9F1E7] text-left">
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Subtotal</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item._id} className="border-t">
              <td className="p-4 flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-[100px] h-[100px] rounded-lg object-cover" />
                <span>{item.title}</span>
              </td>
              <td className="p-4">Rs. {item.price.toLocaleString()}</td>
              <td className="p-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item._id, e.target.value)}
                  className="w-16 p-2 border rounded-md"
                />
              </td>
              <td className="p-4">Rs. {(item.price * item.quantity).toLocaleString()}</td>
              <td className="p-4 text-center">
                <FaTrashAlt className="text-[#B88E2F] cursor-pointer" onClick={() => removeFromCart(item._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full h-[400px] lg:w-1/3 bg-[#F9F1E7] p-10 pt-[70px] shadow-md rounded-lg lg:ml-8 mt-8 lg:mt-0 lg:sticky lg:top-0">
        <h2 className="text-2xl font-semibold mb-6 text-center">Cart Totals</h2>
        <div className="flex justify-between mb-4">
          <span>Subtotal:</span>
          <span>Rs. {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mb-6">
          <span>Total:</span>
          <span className="text-[#B88E2F] text-lg font-bold">Rs. {subtotal.toLocaleString()}</span>
        </div>
        <button className="w-full py-3 font-semibold rounded-md border-[1px] border-[black]"><Link href="/checkout">Check Out</Link></button>
      </div>
    </div>
  );
};

export default Section2Cart;
