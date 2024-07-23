'use client'
import React, { useState, useEffect } from 'react';

const Section2Checkout = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // Ensure each item has a quantity property
    const itemsWithQuantity = storedCartItems.map((item: any) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(itemsWithQuantity);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='container mx-auto py-10 flex flex-col lg:flex-row justify-between'>
      <div className='w-full lg:w-2/3 bg-white p-8 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-6'>Billing details</h2>
        <form className='grid grid-cols-1 gap-4'>
          <div className='flex justify-between items-center'>
            <input type='text' placeholder='First Name' className='p-3 border rounded-lg w-[48%]' />
            <input type='text' placeholder='Last Name' className='p-3 border rounded-lg w-[48%]' />
          </div>
          <input type='text' placeholder='Company Name (Optional)' className='p-3 border rounded-lg' />
          <select className='p-3 border rounded-lg'>
            <option>Country / Region</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="Uzbekistan">Uzbekistan</option>
          </select>
          <input type='text' placeholder='Street address' className='p-3 border rounded-lg' />
          <input type='text' placeholder='Town / City' className='p-3 border rounded-lg' />
          <input type='text' placeholder='Province' className='p-3 border rounded-lg' />
          <input type='text' placeholder='ZIP code' className='p-3 border rounded-lg' />
          <input type='text' placeholder='Phone' className='p-3 border rounded-lg' />
          <input type='text' placeholder='Email address' className='p-3 border rounded-lg' />
        </form>
      </div>

      <div className='w-full lg:w-1/3 p-8 rounded-lg lg:ml-8 mt-8 lg:mt-0'>
        <h2 className='text-2xl font-semibold mb-6'>Product</h2>
        <div className='mb-6'>
          {cartItems.map(item => (
            <div key={item._id} className='flex justify-between mb-4'>
              <span>{item.title} x {item.quantity}</span>
              <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className='flex justify-between mb-4'>
          <span>Subtotal:</span>
          <span>Rs. {subtotal.toLocaleString()}</span>
        </div>
        <div className='flex justify-between mb-6'>
          <span>Total:</span>
          <span className='text-[#B88E2F] text-lg font-bold'>Rs. {subtotal.toLocaleString()}</span>
        </div>
        <h2 className='text-2xl font-semibold mb-4'>Payment Method</h2>
        <div className='flex flex-col mb-6'>
          <label className='mb-2'>
            <input type='radio' name='payment' className='mr-2' />
            Direct Bank Transfer
          </label>
          <label className='mb-2'>
            <input type='radio' name='payment' className='mr-2' />
            Cash On Delivery
          </label>
        </div>
        <p className='text-sm mb-6'>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>
        <button className='w-full py-3 font-semibold rounded-lg border-[1px] border-black'>
          Place order
        </button>
      </div>
    </div>
  );
};

export default Section2Checkout;
