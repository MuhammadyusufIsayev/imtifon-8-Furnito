'use client'
import React, { useEffect, useState } from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

const Section2 = () => {
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
        const data = await response.json();
        setCategories(data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto py-[60px]">
      <div className="text-center pb-[60px]">
        <h2 className="text-[32px] font-bold">Browse The Range</h2>
        <p className="text-[20px] text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-3 gap-[20px]">
        {loading ? (
          <LoadingSpinner  />
        ) : (
          categories.map((category: any) => (
            <div key={category._id} className="text-center cursor-pointer">
              <img className="w-full h-[500px] rounded-[10px]" src={category.image} alt={category.name} />
              <h3 className="mt-[30px] text-[24px] font-[600]">{category.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Section2;
