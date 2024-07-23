import React from "react";
import banner from "@/app/assets/images/banner-all.png";
import miniLogo from "@/app/assets/logo-mini.svg";
import Image from "next/image";
import Link from "next/link";

const Section1About = () => {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-[350px]">
        <Image src={miniLogo} alt="logo" />
        <h1 className="text-[48px] font-[500]">Blog</h1>
        <p className="text-[16px] font-[500] flex items-center">
          <Link href="/">Home</Link>{">"} <span className="font-[300] ml-1"> Blog</span>
        </p>
      </div>
    </div>
  );
};

export default Section1About;
