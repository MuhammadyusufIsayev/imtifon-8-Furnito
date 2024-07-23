import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'], 
  });

const Section1 = () => {
  return (
    <div className="h-[750px] bg-cover bg-no-repeat bg-center bg-[url('https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVSVD6tEdcCE2m8aEIXPECpUS3U6FPzmqXT0J9IVbzfV4sPYO0yB3AtSObcBgl2o0-1XsxW6~wBaV6-OocGwQhf55-5KKobCddcEhYa6SDMoSIs-zH9jDfV8VIVD5yyXgY48Inbj93GG3aC7KCd4SkCpkuI4Gozk9mAJf1EQ9HJZcIC479aWFp8BNk5vt3NshnwD4KD4X-DIV82V-jLmdDBUp7uXIdIiaVtgkDZ1x1p4oDTddis2A-HnmJISEce9fNlPoaJWaWGLfTwxN-FRKzdDVpZmxZEkGJC2nwG69OAcjJJB~25rvTqBKbPUCw1lxg-IEI84h9yN2UoA4gta3g__')]">
      <div className="container mx-auto relative">
        <div className={`${poppins.className} w-[700px] h-[470px] bg-[#FFF3E3] rounded-[10px] p-[40px] pt-[60px] flex flex-col gap-5 absolute right-0 top-40 `}>
            <p className="text-[16px] font-[600] tracking-[3px]">New Arrival</p>
            <h1 className="text-[52px] font-[700] w-[450px] text-[#B88E2F]">Discover Our New Collection</h1>
            <p className="text-[18px] font-[500] w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#B88E2F] text-[#FFFFFF] w-[222px] h-[74px] rounded-[10px] font-[700]">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
