import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/app/assets/comporisonI/group-156.png";
import img2 from "@/app/assets/comporisonI/group-157.png";

const Section2Comparison = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-[30px] mb-[64px]">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[28px] w-[223px]">Go to Product page for more Products</h2>
          <Link className="text-[#727272] border-b-[1px] border-b-[#727272] w-[85px]" href="#">View More</Link>
        </div>
        <div>
          <Image src={img1} alt="Comparison" />
          <h3 className="text-[24px] font-[500] mt-[18px]">Asgaard Sofa</h3>
          <p className="text-[18px]">Rs. 250,000.00</p>
          <p>4.7 ⭐⭐⭐⭐⭐</p>
        </div>
        <div className="mb-[27px]">
          <Image src={img2} alt="Comparison" />
          <h3 className="text-[24px] font-[500] mt-[18px]">Outdoor Sofa Set</h3>
          <p className="text-[18px]">Rs. 224,000.00</p>
          <p>4.2 ⭐⭐⭐⭐⭐</p>
        </div>
        <div className="flex flex-col gap-[14px]">
          <h3 className="text-[24px] font-[600]">Add A Product</h3>
          <button className="w-[242px] h-[40px] bg-[#B88E2F] text-white rounded">Choose a Product</button>
        </div>
      </div>
      <div className="overflow-x-auto mb-[112px]">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Category</th>
              <th className="py-2 px-4 border-b text-left">Asgaard Sofa</th>
              <th className="py-2 px-4 border-b text-left">Outdoor Sofa Set</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Sales Package</td>
              <td className="py-2 px-4 border-b">1 sectional sofa</td>
              <td className="py-2 px-4 border-b">1 Three Seater, 2 Single Seater</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Model Number</td>
              <td className="py-2 px-4 border-b">TFCBLIGRBL6SRHS</td>
              <td className="py-2 px-4 border-b">DTUBLIGRBL568</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Secondary Material</td>
              <td className="py-2 px-4 border-b">Solid Wood</td>
              <td className="py-2 px-4 border-b">Solid Wood</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Configuration</td>
              <td className="py-2 px-4 border-b">L-shaped</td>
              <td className="py-2 px-4 border-b">L-shaped</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Upholstery Material</td>
              <td className="py-2 px-4 border-b">Fabric + Cotton</td>
              <td className="py-2 px-4 border-b">Fabric + Cotton</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Upholstery Color</td>
              <td className="py-2 px-4 border-b">Bright Grey & Lion</td>
              <td className="py-2 px-4 border-b">Bright Grey & Lion</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Filling Material</td>
              <td className="py-2 px-4 border-b">Foam</td>
              <td className="py-2 px-4 border-b">Matte</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Finish Type</td>
              <td className="py-2 px-4 border-b">Bright Grey & Lion</td>
              <td className="py-2 px-4 border-b">Bright Grey & Lion</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Adjustable Headrest</td>
              <td className="py-2 px-4 border-b">No</td>
              <td className="py-2 px-4 border-b">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Maximum Load Capacity</td>
              <td className="py-2 px-4 border-b">280 KG</td>
              <td className="py-2 px-4 border-b">300 KG</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Origin of Manufacture</td>
              <td className="py-2 px-4 border-b">India</td>
              <td className="py-2 px-4 border-b">India</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Width</td>
              <td className="py-2 px-4 border-b">265.32 cm</td>
              <td className="py-2 px-4 border-b">265.32 cm</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Height</td>
              <td className="py-2 px-4 border-b">76 cm</td>
              <td className="py-2 px-4 border-b">76 cm</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Depth</td>
              <td className="py-2 px-4 border-b">167.76 cm</td>
              <td className="py-2 px-4 border-b">167.76 cm</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Weight</td>
              <td className="py-2 px-4 border-b">45 KG</td>
              <td className="py-2 px-4 border-b">65 KG</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Seat Height</td>
              <td className="py-2 px-4 border-b">41.52 cm</td>
              <td className="py-2 px-4 border-b">41.52 cm</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Leg Height</td>
              <td className="py-2 px-4 border-b">5.46 cm</td>
              <td className="py-2 px-4 border-b">5.46 cm</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Warranty Summary</td>
              <td className="py-2 px-4 border-b">1 Year Manufacturing Warranty</td>
              <td className="py-2 px-4 border-b">1.2 Year Manufacturing Warranty</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Warranty Service Type</td>
              <td className="py-2 px-4 border-b">For Warranty Claims or Any Product Related Issues Please Email at operations@xyzfurni.com</td>
              <td className="py-2 px-4 border-b">For Warranty Claims or Any Product Related Issues Please Email at support@xyzfurni.com</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Covered in Warranty</td>
              <td className="py-2 px-4 border-b">Warranty Against Manufacturing Defect Only</td>
              <td className="py-2 px-4 border-b">Warranty of the product is limited to the defects of manufacturing only</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold">Not Covered in Warranty</td>
              <td className="py-2 px-4 border-b">The Warranty Does Not Cover Damages Due to Usage of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage</td>
              <td className="py-2 px-4 border-b">The Warranty Does Not Cover Damages Due to Usage of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Section2Comparison;
