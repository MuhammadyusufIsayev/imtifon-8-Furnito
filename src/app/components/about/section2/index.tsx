import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import big1 from '@/app/assets/forBlog/big-1.png';
import big2 from '@/app/assets/forBlog/big-2.png';
import big3 from '@/app/assets/forBlog/big-3.png';

import mini1 from '@/app/assets/forBlog/mini-1.png';
import mini2 from '@/app/assets/forBlog/mini-2.png';
import mini3 from '@/app/assets/forBlog/mini-3.png';
import mini4 from '@/app/assets/forBlog/mini-4.png';
import mini5 from '@/app/assets/forBlog/mini-5.png';

const Section2About = () => {
  return (
    <div className="container mx-auto pt-[100px] flex flex-col lg:flex-row lg:space-x-8">

      <div className="w-full lg:w-3/4 p-4">
        <div className="mb-8">
          <Image src={big1} alt="Blog Post" className="w-full h-auto mb-4" />
          <div className="flex items-center text-gray-600 mb-4">
            <span>👤 Admin</span>
            <span className="mx-2">|</span>
            <span>📅 16 Oct 2022</span>
            <span className="mx-2">|</span>
            <span>🏷️ Handmade</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Going all-in with millennial design</h2>
          <p className="text-[#9F9F9F] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
          <Link href="#" className="border-b-[1px] border-black">Read more</Link>
        </div>

        <div className="mb-8">
          <Image src={big2} alt="Blog Post" className="w-full h-auto mb-4" />
          <div className="flex items-center text-gray-600 mb-4">
            <span>👤 Admin</span>
            <span className="mx-2">|</span>
            <span>📅 16 Oct 2022</span>
            <span className="mx-2">|</span>
            <span>🏷️ Handmade</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Exploring new ways of decorating</h2>
          <p className="text-[#9F9F9F] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
          <Link href="#" className="border-b-[1px] border-black">Read more</Link>
        </div>
        <div className="mb-8">
          <Image src={big3} alt="Blog Post" className="w-full h-auto mb-4" />
          <div className="flex items-center text-gray-600 mb-4">
            <span>👤 Admin</span>
            <span className="mx-2">|</span>
            <span>📅 16 Oct 2022</span>
            <span className="mx-2">|</span>
            <span>🏷️ Handmade</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Handmade pieces that took time to make</h2>
          <p className="text-[#9F9F9F] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
          <Link href="#" className="border-b-[1px] border-black">Read more</Link>
        </div>
      </div>

      <div className="w-full lg:w-1/4 p-4">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="text-gray-800">
            <li className="mb-2 flex justify-between"><Link href="#" className="hover:text-blue-500">Crafts</Link><span>2</span></li>
            <li className="mb-2 flex justify-between"><Link href="#" className="hover:text-blue-500">Design</Link><span>8</span></li>
            <li className="mb-2 flex justify-between"><Link href="#" className="hover:text-blue-500">Handmade</Link><span>7</span></li>
            <li className="mb-2 flex justify-between"><Link href="#" className="hover:text-blue-500">Interior</Link><span>1</span></li>
            <li className="mb-2 flex justify-between"><Link href="#" className="hover:text-blue-500">Wood</Link><span>6</span></li>
          </ul>
        </div>
        <div className='flex flex-col gap-[40px]'>
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <div className="mb-4 flex items-center">
            <Image src={mini1} alt="Recent Post" className="w-16 h-16 object-cover mr-4" />
            <div>
              <Link href="#" className="text-gray-800 hover:text-blue-500">Going all-in with millennial design</Link>
              <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <Image src={mini2} alt="Recent Post" className="w-16 h-16 object-cover mr-4" />
            <div>
              <Link href="#" className="text-gray-800 hover:text-blue-500">Exploring new ways of decorating</Link>
              <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <Image src={mini3} alt="Recent Post" className="w-16 h-16 object-cover mr-4" />
            <div>
              <Link href="#" className="text-gray-800 hover:text-blue-500">Handmade pieces that took time to make</Link>
              <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <Image src={mini4} alt="Recent Post" className="w-16 h-16 object-cover mr-4" />
            <div>
              <Link href="#" className="text-gray-800 hover:text-blue-500">Modern home designs</Link>
              <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <Image src={mini5} alt="Recent Post" className="w-16 h-16 object-cover mr-4" />
            <div>
              <Link href="#" className="text-gray-800 hover:text-blue-500">Cozying up your space</Link>
              <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2About;
