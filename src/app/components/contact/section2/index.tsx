'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Section2Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let validationErrors: FormErrors = {};

    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.subject) validationErrors.subject = 'Subject is required';
    if (!formData.message) validationErrors.message = 'Message is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data: ', formData);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className='container mx-auto mb-[100px]'>
      <div className='flex flex-col items-center justify-center my-[100px]'>
        <h2 className='text-[36px] font-[600]'>Get In Touch With Us</h2>
        <p className='text-[16px] text-[#9F9F9F] w-[640px] text-center'>
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-around'>
        <div className='flex flex-col items-start gap-10'>
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt className='w-6 h-6 text-black' />
            <div>
              <h3 className='font-bold text-lg'>Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt className='w-6 h-6 text-black' />
            <div>
              <h3 className='font-bold text-lg'>Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegClock className='w-6 h-6 text-black' />
            <div>
              <h3 className='font-bold text-lg'>Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <form className='w-full max-w-md' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
              Your name
            </label>
            <input
              className='appearance-none border rounded-xl w-full h-[70px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Abc'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className='text-red-500 text-xs italic'>{errors.name}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email address
            </label>
            <input
              className='appearance-none border rounded-xl w-full h-[70px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Abc@def.com'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='subject'>
              Subject
            </label>
            <input
              className='appearance-none border rounded-xl w-full h-[70px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='subject'
              type='text'
              placeholder='This is an optional'
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className='text-red-500 text-xs italic'>{errors.subject}</p>}
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              className='appearance-none border rounded-xl w-full h-[100px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none'
              id='message'
              placeholder='Hi! I’d like to ask about'
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className='text-red-500 text-xs italic'>{errors.message}</p>}
          </div>
          <div>
            <button className='bg-[#B88E2F] text-white font-bold py-4 px-4 rounded w-[240px] h-[55px]' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section2Contact;
