import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white py-10 border-t border-gray-300">
      <div className="container mx-auto flex gap-[140px] items-start space-x-20">
        <div>
          <h2 className="text-xl font-bold mb-4">Funiro.</h2>
          <address className="not-italic text-sm text-gray-600 leading-6">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </address>
        </div>

        <div className="flex gap-[140px] space-x-20">
          <div>
            <h3 className="text-lg font-medium mb-7 text-gray-800">Links</h3>
            <ul className="text-sm flex flex-col gap-[20px] text-gray-600 space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-7 text-gray-800">Help</h3>
            <ul className="text-sm flex flex-col gap-[20px] text-gray-600 space-y-2">
              <li><a href="/">Payment Options</a></li>
              <li><a href="/">Returns</a></li>
              <li><a href="/">Privacy Policies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-7 text-gray-800">Newsletter</h3>
            <form className="flex space-x-2 gap-2">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="border-b border-b-black px-3 py-2 text-sm text-gray-600 outline-none"
              />
              <button 
                type="submit" 
                className="text-black mx-4 py-2 text-sm font-medium border-b border-b-black"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 text-left border-t-[1px] pt-[20px]">
        <p className="text-sm text-gray-600">2023 funiro. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
