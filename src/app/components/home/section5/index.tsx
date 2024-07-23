import React from "react";
import images from "@/app/assets/images/Images.png";

const Section5 = () => {
  return (
    <div
      className="h-screen bg-cover bg-center mb-[65px]"
      style={{ backgroundImage: `url(${images.src})` }}
    >
      <div className="container mx-auto text-center">
        <p className="text-[20px] font-[600] text-[#616161]">Share your setup with</p>
        <h2 className="text-[40px] font-bold text-[#3A3A3A]">#FuniroFurniture</h2>
      </div>
    </div>
  );
};

export default Section5;
