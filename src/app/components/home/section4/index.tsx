"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Section4 = () => {
  return (
    <div className="bg-[#FCF8F3] py-[44px] my-[65px]">
      <div className="container mx-auto flex items-center h-[670px] gap-[100px]">
        <div className="flex flex-col gap-[7px] w-[420px]">
          <h1 className="text-[40px] font-[700] text-[#3A3A3A]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-[16px] text-[#616161]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] text-[#FFFFFF] w-[180px] h-[45px] rounded-sm font-[500] mt-[20px]">
            Explore More
          </button>
        </div>
        <div>
          <Swiper
            className="w-[1000px] h-[600px]"
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView={2.2}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
          >
            <SwiperSlide >
              <img className="w-[600px] h-[600px]"
                src="https://www.figma.com/file/W9SfH2wgOU9SnfBlaedLYh/image/f89a66d94961c3801f4c07439f27b13468e5e545"
                alt="Room 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[600px] h-[600px]"
                src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0m-7zso60PHtoTcZPCCRRw6dh4mlfYSTrmk8yXCJd1pL8kiANWAGC6WuPv2rao1Z0rmPq67jiWhzNOBdSLB8zao9edSh7wZ2RlLhAW~luN9bqVdEoUTJUs3bkDL3Y1tpI0nFvTHddouGzUwUCIvnGDDLOp~aifR56ExoQM2poy6Z74Wg-Bn0ZhH134vNfRKYpeZzCxyGnZvKS9jOWumJAubIejliE5afl8dHudRkEh~undcg3I~LqRifV1L6hw7zdphXPCfqjVT6jwAtnLhaMEgph97LTCxO6oTW6GngvW1HGHiXgjujUSp8n~ylhKzpe6tm2IXn8fo2NvGv3yNug__"
                alt="Room 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[600px] h-[600px]"
                src="https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhcjtmD~MP5nD8yib0XUPtbTatcEbGG3K~gbvuQ18GI6v9ZkBsxLauRJIjMSEPHdMuW9UdPU9nGBBe8FA6Hlje-pZUfa5dMMpU13dgjhljf1VKtOcjFXJpA9WCWWCFcS20ChPYRbuVbG-XWNzgTprJokrVDArdE-IfOd9KfmWEDu-pxXPIjp8GorKWBltTGpFKMvGS~MssLoBYX4Kfrgu75xgmgNsIpswAQ~O2qFdXdKmiSsWjN6Q~-tqwtXo8J9lIBGcT7As~z9RgpeWrnivOk~lNRNEXbzILIMq0ncg9YcJCvoHMtWRjEt46dmpOTyTLyuZ52WZP-2AKzKbclKzA__"
                alt="Room 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[600px] h-[600px]"
                src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0m-7zso60PHtoTcZPCCRRw6dh4mlfYSTrmk8yXCJd1pL8kiANWAGC6WuPv2rao1Z0rmPq67jiWhzNOBdSLB8zao9edSh7wZ2RlLhAW~luN9bqVdEoUTJUs3bkDL3Y1tpI0nFvTHddouGzUwUCIvnGDDLOp~aifR56ExoQM2poy6Z74Wg-Bn0ZhH134vNfRKYpeZzCxyGnZvKS9jOWumJAubIejliE5afl8dHudRkEh~undcg3I~LqRifV1L6hw7zdphXPCfqjVT6jwAtnLhaMEgph97LTCxO6oTW6GngvW1HGHiXgjujUSp8n~ylhKzpe6tm2IXn8fo2NvGv3yNug__"
                alt="Room 2"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section4;
